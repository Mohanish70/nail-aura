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
  const [handHeight, setHandHeight] = useState(0);
  const [handWidth, setHandWidth] = useState(0);
  const [model, setModel] = useState(null);
  const [hands, setHands] = useState([]);
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
    const interval = setInterval(detectHands, 500);
    return () => clearInterval(interval);
  }, [model]);

  // Handle placement of the nail design on the hand
  const handleNailDesignPlacement = () => {
    if (hands.length > 0) {
      const hand = hands[0];
      const fingerTip = hand.landmarks[8];  // Index finger tip
      const wrist = hand.landmarks[0];     // Wrist

      // Calculate position and rotation
      const handWidth = Math.abs(fingerTip[0] - wrist[0]);
      const handWidthRatio = handWidth / 100; // Adjust this ratio based on your design size
      const handHeightRatio = handHeight / 100;
      const handSize = Math.max(handWidthRatio, handHeightRatio) * 100;
      const handHeight = Math.abs(fingerTip[1] - wrist[1]);
      const angle = Math.atan2(fingerTip[1] - wrist[1], fingerTip[0] - wrist[0]) * (180 / Math.PI);
      const designWidth = handWidth * 1.5; // Adjust this multiplier based on your design size
      const designHeight = handHeight * 1.5;
      const designWidthRatio = designWidth / 100;
      const designHeightRatio = designHeight / 100;
      const designSize = Math.max(designWidthRatio, designHeightRatio) * 100;

      setDesignPosition({
        
        top: (fingerTip[1] + wrist[1]) / 2,
        left: (fingerTip[0] + wrist[0]) / 2,
        size: handWidth * 1.5,
        rotation: angle,
      });
    }
  };

  useEffect(() => {
    handleNailDesignPlacement();
  }, [hands]);

  const handleColorChange = (e) => {
    if (e.target.value.startsWith('#')) {
      setColor(e.target.value);
    }
    // If the color is in RGB format, convert it to HEX
    else if (e.target.value.startsWith('rgb')) {
      const rgb = e.target.value.match(/\d+/g);
      const hex = `#${((1 << 24) + (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2])).toString(16).slice(1)}`;
      setColor(hex);
    }
    setColor(e.target.value);
  };

  const handleDesignChange = (design) => {
    if (design === selectedDesign) {
      setSelectedDesign(null);
    } else {
      setSelectedDesign(design);
    } 
    // Reset design position when changing design
    setDesignPosition({ top: 0, left: 0, size: 100, rotation: 0 });
    // Set the new design

    setSelectedDesign(design);
    setDesignPosition({ ...designPosition, size: design.size });
    // Set the new design
    setDesignPosition({ ...designPosition, size: design.size });  
  // Set the new design
    setDesignPosition({ ...designPosition, size: design.size });
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
      <p>Adjust the design position and size using the sliders.</p>
      <p>Point your hand towards the camera to see the design applied!</p>
      <p>Click on the design to select it.</p>
      <p>Click on the color to change it.</p>
      <p>Click on the sliders to adjust the design position and size.</p> 
      <p>Click on the design to select it.</p>
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
