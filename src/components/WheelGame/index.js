import React, { useState, useRef } from 'react';
import { Categories, Questions } from '../../questions';

import './index.css';

const WheelGame = () => {
  const [categories] = useState(Object.values(Categories));

  
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [rotation, setRotation] = useState(0);
  const [showQuestionWheel, setShowQuestionWheel] = useState(false);
  const [isSpinningQuestion, setIsSpinningQuestion] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [questionRotation, setQuestionRotation] = useState(0);
  const wheelRef = useRef();
  const questionWheelRef = useRef();

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#FFB347'
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSelectedCategory('');
    setShowQuestionWheel(false);
    setSelectedQuestion('');
    
    const spins = 5 + Math.random() * 5;
    const finalRotation = rotation + spins * 360 + Math.random() * 360;
    setRotation(finalRotation);
    
    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const segmentAngle = 360 / categories.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % categories.length;
      setSelectedCategory(categories[selectedIndex]);
      setIsSpinning(false);
      
      setTimeout(() => {
        setShowQuestionWheel(true);
      }, 1000);
    }, 3000);
  };

  const spinQuestionWheel = () => {
    if (isSpinningQuestion || !selectedCategory) return;
    
    setIsSpinningQuestion(true);
    setSelectedQuestion('');
    
    const questions = Questions[selectedCategory];
    const spins = 5 + Math.random() * 5;
    const finalRotation = questionRotation + spins * 360 + Math.random() * 360;
    setQuestionRotation(finalRotation);
    
    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const segmentAngle = 360 / questions.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % questions.length;
      setSelectedQuestion(questions[selectedIndex]);
      setIsSpinningQuestion(false);
    }, 3000);
  };

  const resetGame = () => {
    setSelectedCategory('');
    setSelectedQuestion('');
    setShowQuestionWheel(false);
    setRotation(0);
    setQuestionRotation(0);
  };

  return (
    <div className="wheel-game">
      <h1>Spin the Wheel!</h1>
      
      {selectedCategory && !showQuestionWheel && (
        <div className="result">
          <h2>Category: {selectedCategory}!</h2>
          <p>Question wheel coming up...</p>
        </div>
      )}
      
      {selectedQuestion && (
        <div className="result">
          <h2>Your Question:</h2>
          <p>{selectedQuestion}</p>
        </div>
      )}
      
      <div className="wheels-container">
        <div className="wheel-section">
          <h2>Categories</h2>
          <div className="wheel-container">
            <div 
              ref={wheelRef}
              className={`wheel ${isSpinning ? 'spinning' : ''}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {categories.map((category, index) => {
                const angle = (360 / categories.length) * index;
                return (
                  <div
                    key={category}
                    className="wheel-segment"
                    style={{
                      '--segment-angle': `${360 / categories.length}deg`,
                      '--segment-index': index,
                      '--segment-color': colors[index % colors.length],
                      transform: `rotate(${angle}deg)`
                    }}
                  >
                    <div className="segment-text">
                      {category}
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
            {isSpinning ? 'Spinning...' : 'Spin Category Wheel!'}
          </button>
        </div>

        {showQuestionWheel && selectedCategory && (
          <div className="wheel-section">
            <h2>Questions - {selectedCategory}</h2>
            <div className="wheel-container">
              <div 
                ref={questionWheelRef}
                className={`wheel ${isSpinningQuestion ? 'spinning' : ''}`}
                style={{ transform: `rotate(${questionRotation}deg)` }}
              >
                {Questions[selectedCategory].map((question, index) => {
                  const angle = (360 / Questions[selectedCategory].length) * index;
                  return (
                    <div
                      key={question}
                      className="wheel-segment"
                      style={{
                        '--segment-angle': `${360 / Questions[selectedCategory].length}deg`,
                        '--segment-index': index,
                        '--segment-color': colors[index % colors.length],
                        transform: `rotate(${angle}deg)`
                      }}
                    >
                      <div className="segment-text">
                        {question}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="wheel-pointer"></div>
            </div>
            
            <button 
              onClick={spinQuestionWheel} 
              disabled={isSpinningQuestion}
              className="spin-button"
            >
              {isSpinningQuestion ? 'Spinning...' : 'Spin Question Wheel!'}
            </button>
          </div>
        )}
      </div>
      
      {(selectedCategory || selectedQuestion) && (
        <button onClick={resetGame} className="reset-button">
          Start Over
        </button>
      )}
    </div>
  );
};

export default WheelGame;
