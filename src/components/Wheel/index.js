import React, { useRef, useState } from 'react';
import './index.css';

const Wheel = ({
  segments,
  onSpinEnd,
  isSpinning,
  setIsSpinning,
  title,
  colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#FFB347'
  ]
}) => {
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef();

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    const spins = 5 + Math.random() * 5;
    const finalRotation = rotation + spins * 360 + Math.random() * 360;
    setRotation(finalRotation);
    
    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const segmentAngle = 360 / segments.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % segments.length;
      onSpinEnd(segments[selectedIndex], selectedIndex);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="wheel-section">
      <h2>{title}</h2>
      <div className="wheel-container">
        <div 
          ref={wheelRef}
          className={`wheel ${isSpinning ? 'spinning' : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {segments.map((segment, index) => {
            const angle = (360 / segments.length) * index;
            return (
              <div
                key={typeof segment === 'string' ? segment : index}
                className="wheel-segment"
                style={{
                  '--segment-angle': `${360 / segments.length}deg`,
                  '--segment-index': index,
                  '--segment-color': colors[index % colors.length],
                  transform: `rotate(${angle}deg)`
                }}
              >
                <div className="segment-text">
                  {segment}
                </div>
              </div>
            );
          })}
        </div>
        <div className="wheel-pointer"></div>
      </div>
      
      <button 
        onClick={spinWheel} 
        disabled={isSpinning}
        className="spin-button"
      >
        {isSpinning ? 'Spinning...' : `Spin ${title} Wheel!`}
      </button>
    </div>
  );
};

export default Wheel; 
