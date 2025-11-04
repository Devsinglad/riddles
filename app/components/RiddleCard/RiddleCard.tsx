import React from 'react';
import type { RiddleCardProps } from '../../types/riddle.types';
import './RiddleCard.css';

const RiddleCard: React.FC<RiddleCardProps> = ({ riddle, isAnswerRevealed, onRevealAnswer }) => {
  return (
    <div className="riddle-card">
      <div className="riddle-header">
        <h2 className="riddle-clue">{riddle.clue}</h2>
        <span className="riddle-id">#{riddle.id}</span>
      </div>
      
      <div className="riddle-content">
        <p className="riddle-text">{riddle.riddle}</p>
        
        <div className={`answer-section ${isAnswerRevealed ? 'revealed' : ''}`}>
          {isAnswerRevealed ? (
            <div className="answer-revealed">
              <h3>Answer:</h3>
              <p className="answer-text">{riddle.answer}</p>
            </div>
          ) : (
            <button 
              className="reveal-button"
              onClick={onRevealAnswer}
              aria-label="Reveal answer"
            >
              Reveal Answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiddleCard;