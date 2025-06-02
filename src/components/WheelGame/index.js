import React, { useState } from 'react';
import './index.css';
import { Categories, Questions } from '../../questions';
import Wheel from '../Wheel';

const WheelGame = () => {
  const [categories] = useState(Object.values(Categories));
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showQuestionWheel, setShowQuestionWheel] = useState(false);
  const [isSpinningQuestion, setIsSpinningQuestion] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const handleCategorySpinEnd = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      setShowQuestionWheel(true);
    }, 1000);
  };

  const handleQuestionSpinEnd = (question) => {
    setSelectedQuestion(question);
  };

  const resetGame = () => {
    setSelectedCategory('');
    setSelectedQuestion('');
    setShowQuestionWheel(false);
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
        <Wheel
          segments={categories}
          onSpinEnd={handleCategorySpinEnd}
          isSpinning={isSpinning}
          setIsSpinning={setIsSpinning}
          title="Categories"
        />

        {showQuestionWheel && selectedCategory && (
          <Wheel
            segments={Questions[selectedCategory]}
            onSpinEnd={handleQuestionSpinEnd}
            isSpinning={isSpinningQuestion}
            setIsSpinning={setIsSpinningQuestion}
            title={`Questions - ${selectedCategory}`}
          />
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
