import React, { useState, useEffect } from 'react';
import type { Riddle } from './types/riddle.types';
import RiddleCard from './components/RiddleCard';
import Navigation from './components/Navigation';
import '../styles/globals.css';

const App: React.FC = () => {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/riddles.json');

        if (!response.ok) {
          throw new Error(`Failed to fetch riddles: ${response.status}`);
        }

        const data = await response.json();
        setRiddles(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching riddles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRiddles();
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsAnswerRevealed(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < riddles.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswerRevealed(false);
    }
  };

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading riddles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (riddles.length === 0) {
    return (
      <div className="app-container">
        <div className="no-riddles">
          <h2>No riddles found</h2>
          <p>Please check back later for new riddles!</p>
        </div>
      </div>
    );
  }

  const currentRiddle = riddles[currentIndex];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tech Riddles Challenge</h1>
        <p>Test your knowledge with fun tech-themed riddles!</p>
      </header>

      <main className="app-main">
        <RiddleCard
          riddle={currentRiddle}
          isAnswerRevealed={isAnswerRevealed}
          onRevealAnswer={handleRevealAnswer}
        />

        <Navigation
          currentIndex={currentIndex}
          totalRiddles={riddles.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </main>

      <footer className="app-footer">
        <p>© 2024 Tech Riddles Challenge</p>
      </footer>
    </div>
  );
};

export default App;