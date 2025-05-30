import * as handTrack from 'handtrackjs';
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './CameraCustomizer.css';

// Nail Designs Data
const nailDesigns = [
  { src: '/images/1.jpg', name: 'Classic' },
  { src: '/images/2.jpg', name: 'Glam' },
  { src: '/images/3.png', name: 'Trendy' },
  { src: '/images/4.jpg', name: 'Elegant' },
  { src: '/images/5.jpg', name: 'Chic' },
  { src: '/images/6.jpg', name: 'Bold' },
  { src: '/images/7.jpg', name: 'Artistic' },
  { src: '/images/8.jpg', name: 'Floral' },
  { src: '/images/9.jpg', name: 'Abstract' },
  { src: '/images/10.jpg', name: 'Minimalist' },
  { src: '/images/11.jpg', name: 'Geometric' },
  { src: '/images/12.jpg', name: 'Gradient' },
  { src: '/images/13.jpg', name: 'Metallic' },
  { src: '/images/14.jpg', name: 'Ombre' },
  { src: '/images/15.jpg', name: 'Glitter' },
  { src: '/images/16.jpg', name: 'Matte' },
  { src: '/images/17.jpg', name: 'Textured' },
  { src: '/images/18.jpg', name: 'Seasonal' },
  { src: '/images/19.jpg', name: 'Themed' },
];

const CameraCustomizer = () => {
  const webcamRef = useRef(null);
  const [selectedDesign, setSelectedDesign] = useState(nailDesigns[0]);
  const [hands, setHands] = useState([]);
  const [model, setModel] = useState(null);
  const [designPosition, setDesignPosition] = useState({ top: 0, left: 0, size: 100, rotation: 0 });
  const [color, setColor] = useState('#FF0066');
  const [loading, setLoading] = useState(true);
  const [cameraError, setCameraError] = useState(null);

  // Load Handtrack.js model
  useEffect(() => {
    const loadModel = async () => {
      setLoading(true);
      const model = await handTrack.load();
      setModel(model);
      setLoading(false);
    };
    loadModel();
  }, []);

  // Detect hands
  const detectHands = async () => {
    if (model && webcamRef.current) {
      const predictions = await model.detect(webcamRef.current.video);
      setHands(predictions);
    }
  };

  useEffect(() => {
    const interval = setInterval(detectHands, 100);  // Detect hands more frequently for real-time responsiveness
    return () => clearInterval(interval);
  }, [model]);

  // Handle placement of the nail design on the hand
  const handleNailDesignPlacement = () => {
    if (hands.length > 0) {
      const hand = hands[0];
      const fingerTips = [
        hand.landmarks[4],  // Thumb tip
        hand.landmarks[8],  // Index finger tip
        hand.landmarks[12], // Middle finger tip
        hand.landmarks[16], // Ring finger tip
        hand.landmarks[20], // Pinky finger tip
      ];

      // Calculate average position of all finger tips
      const avgX = fingerTips.reduce((acc, point) => acc + point[0], 0) / fingerTips.length;
      const avgY = fingerTips.reduce((acc, point) => acc + point[1], 0) / fingerTips.length;

      const handWidth = Math.abs(hand.landmarks[4][0] - hand.landmarks[0][0]);
      const handHeight = Math.abs(hand.landmarks[8][1] - hand.landmarks[0][1]);

      setDesignPosition({
        top: avgY,
        left: avgX,
        size: Math.max(handWidth, handHeight) * 1.5, // Scale size based on hand size
        rotation: 0,  // Can be further customized for rotation
      });
    }
  };

  useEffect(() => {
    handleNailDesignPlacement();
  }, [hands]);

  // Handle color change for the nail design
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Handle design change
  const handleDesignChange = (design) => {
    setSelectedDesign(design);
    setDesignPosition({ ...designPosition, size: 100 });  // Reset size when changing design
  };

  const videoConstraints = {
    facingMode: 'environment',
    width: { ideal: 1280 },
    height: { ideal: 720 },
  };

  const handleCameraError = (error) => {
    setCameraError(error.message);
  };

  return (
    <div className="camera-customizer">
      <h1>Nail Design Customizer</h1>
      <p>Choose your nail design and color!</p>
      <p>Point your hand towards the camera to see the design applied!</p>
      <h2>Try Nails Live!</h2>

      {loading ? (
        <div className="loading-overlay">Loading Hand Detection...</div>
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            className="webcam"
            mirrored
            videoConstraints={videoConstraints}
            onError={handleCameraError}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
            }}
          />

          {cameraError && (
            <div className="camera-error-message">
              <p>Unable to access camera: {cameraError}</p>
            </div>
          )}

          <div className="design-selector">
            {nailDesigns.map((design, index) => (
              <div
                key={index}
                onClick={() => handleDesignChange(design)}
                className={`design-thumb ${selectedDesign === design ? 'selected' : ''}`}
                style={{
                  backgroundImage: `url(${design.src})`,
                  backgroundSize: 'cover',
                }}
              />
            ))}
          </div>

          <div className="color-picker">
            <label>Choose Nail Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
          </div>

          <div className="design-position">
            <label>Design Position:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={designPosition.top}
              onChange={(e) => setDesignPosition({ ...designPosition, top: e.target.value })}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={designPosition.left}
              onChange={(e) => setDesignPosition({ ...designPosition, left: e.target.value })}
            />
            <input
              type="range"
              min="50"
              max="200"
              value={designPosition.size}
              onChange={(e) => setDesignPosition({ ...designPosition, size: e.target.value })}
            />
          </div>

          {hands.length > 0 && (
            <div className="hand-overlay">
              <p>Hand detected!</p>
            </div>
          )}

          <img
            src={selectedDesign.src}
            alt="Nail Overlay"
            className="nail-overlay"
            style={{
              position: 'absolute',
              top: `${designPosition.top}%`,
              left: `${designPosition.left}%`,
              transform: `translate(-50%, -50%) rotate(${designPosition.rotation}deg)`,
              width: `${designPosition.size}px`,
              zIndex: 10,
              filter: `hue-rotate(${color}deg)`,
            }}
          />
        </>
      )}
    </div>
  );
};

export default CameraCustomizer;
