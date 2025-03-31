import * as handTrack from 'handtrackjs'; // Import handtrack.js
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './CameraCustomizer.css';

const nailDesigns = [
  { src: '/images/1.jpg', name: 'Classic' },
  { src: '/images/2.jpg', name: 'Glam' },
  { src: '/images/3.png', name: 'Trendy' },
];

const CameraCustomizer = () => {
  const webcamRef = useRef(null);
  const [selectedDesign, setSelectedDesign] = useState(nailDesigns[0]);
  const [model, setModel] = useState(null);
  const [hands, setHands] = useState([]);
  const [designPosition, setDesignPosition] = useState({ top: 0, left: 0, size: 100 });
  const [color, setColor] = useState('#FF0066'); // Default color (can be changed by user)
  const [loading, setLoading] = useState(true);

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

  // Detect hands every 100ms
  const detectHands = async () => {
    if (model && webcamRef.current) {
      const predictions = await model.detect(webcamRef.current.video);
      setHands(predictions);
    }
  };

  useEffect(() => {
    const interval = setInterval(detectHands, 100);
    return () => clearInterval(interval);
  }, [model]);

  // Adjust the position of the nail design based on the detected hands
  const handleNailDesignPlacement = () => {
    if (hands.length > 0) {
      const hand = hands[0]; // Assuming the first detected hand is the relevant one

      const fingerTip = hand.landmarks[8]; // Index finger tip landmark
      const wrist = hand.landmarks[0]; // Wrist position landmark

      setDesignPosition({
        top: (fingerTip[1] + wrist[1]) / 2,
        left: (fingerTip[0] + wrist[0]) / 2,
        size: 100,
      });
    }
  };

  useEffect(() => {
    handleNailDesignPlacement();
  }, [hands]);

  // Handle design color change
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // Handle design selection
  const handleDesignChange = (design) => {
    setSelectedDesign(design);
  };

  return (
    <div className="camera-customizer">
      <h2>Try Nails Live!</h2>
      {loading ? (
        <div className="loading-overlay">Loading Hand Detection...</div>
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            className="webcam"
            mirrored
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
            }}
          />

          {/* Design Thumbnails */}
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

          {/* Color Picker */}
          <div className="color-picker">
            <label>Choose Nail Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
          </div>

          {/* Overlay Design */}
          <img
            src={selectedDesign.src}
            alt="Nail Overlay"
            className="nail-overlay"
            style={{
              position: 'absolute',
              top: `${designPosition.top}%`,
              left: `${designPosition.left}%`,
              transform: 'translate(-50%, -50%)',
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
