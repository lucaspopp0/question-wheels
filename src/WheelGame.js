import React, { useState, useRef } from 'react';
import './WheelGame.css';

const WheelGame = () => {
  const [categories] = useState([
    'Food & Drinks',
    'Travel',
    'Sports',
    'Entertainment',
    'Technology',
    'Nature',
    'Art & Culture',
    'Science'
  ]);

  const [categoryQuestions] = useState({
    'Food & Drinks': [
      'What\'s your favorite cuisine?',
      'Cook or order takeout?',
      'Sweet or savory snacks?',
      'Coffee or tea?',
      'Breakfast food favorite?',
      'Try exotic foods?'
    ],
    'Travel': [
      'Beach or mountains?',
      'Solo or group travel?',
      'Camping or hotels?',
      'Road trip or flying?',
      'Dream destination?',
      'Adventure or relaxation?'
    ],
    'Sports': [
      'Team or individual sports?',
      'Summer or winter sports?',
      'Watching or playing?',
      'Favorite Olympic event?',
      'Indoor or outdoor sports?',
      'Morning or evening workout?'
    ],
    'Entertainment': [
      'Movies or TV shows?',
      'Comedy or drama?',
      'Books or podcasts?',
      'Concerts or festivals?',
      'Gaming platform preference?',
      'Binge watch or weekly?'
    ],
    'Technology': [
      'iOS or Android?',
      'Laptop or desktop?',
      'Smart home devices?',
      'VR experience interest?',
      'Social media platform?',
      'Tech upgrade frequency?'
    ],
    'Nature': [
      'Forest or ocean?',
      'Sunrise or sunset?',
      'Gardening interest?',
      'Favorite season?',
      'Wildlife photography?',
      'Hiking difficulty level?'
    ],
    'Art & Culture': [
      'Museums or galleries?',
      'Classical or modern art?',
      'Live theater interest?',
      'Create or observe art?',
      'Music genre preference?',
      'Cultural festival type?'
    ],
    'Science': [
      'Space or ocean exploration?',
      'Biology or physics?',
      'Documentaries or articles?',
      'Lab work interest?',
      'Future technology?',
      'Science museum visits?'
    ]
  });
  
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
    
    const questions = categoryQuestions[selectedCategory];
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
                {categoryQuestions[selectedCategory].map((question, index) => {
                  const angle = (360 / categoryQuestions[selectedCategory].length) * index;
                  return (
                    <div
                      key={question}
                      className="wheel-segment"
                      style={{
                        '--segment-angle': `${360 / categoryQuestions[selectedCategory].length}deg`,
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
      
      {(selectedCategory || selectedQuestion) && (
        <button onClick={resetGame} className="reset-button">
          Start Over
        </button>
      )}
    </div>
  );
};

export default WheelGame;