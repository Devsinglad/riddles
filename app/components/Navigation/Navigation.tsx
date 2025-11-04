import React from 'react';
import type { NavigationProps } from '../../types/riddle.types';
import './Navigation.css';

const Navigation: React.FC<NavigationProps> = ({ 
  currentIndex, 
  totalRiddles, 
  onPrevious, 
  onNext 
}) => {
  const isFirstRiddle = currentIndex === 0;
  const isLastRiddle = currentIndex === totalRiddles - 1;

  return (
    <div className="navigation">
      <div className="navigation-info">
        <span className="riddle-counter">
          Riddle {currentIndex + 1} of {totalRiddles}
        </span>
      </div>
      
      <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          onClick={onPrevious}
          disabled={isFirstRiddle}
          aria-label="Previous riddle"
        >
          ← Previous
        </button>
        
        <button
          className="nav-button next-button"
          onClick={onNext}
          disabled={isLastRiddle}
          aria-label="Next riddle"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Navigation;