import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const nailDesigns = [
  '/nail1.png',
  '/nail2.png',
  '/nail3.png',
];

const CameraCustomizer = () => {
  const webcamRef = useRef(null);
  const [selectedDesign, setSelectedDesign] = useState(nailDesigns[0]);

  return (
    <div className="camera-customizer">
      <h2>Try Nails Live!</h2>
      <Webcam ref={webcamRef} className="webcam" mirrored />
      <div className="design-selector">
        {nailDesigns.map((design, index) => (
          <img
            key={index}
            src={design}
            alt={`Design ${index}`}
            onClick={() => setSelectedDesign(design)}
            className={`design-thumb ${selectedDesign === design ? 'selected' : ''}`}
          />
        ))}
      </div>

      {/* Overlay Design */}
      <img src={selectedDesign} alt="Nail Overlay" className="nail-overlay" />
    </div>
  );
};

export default CameraCustomizer;
