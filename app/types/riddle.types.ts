export interface Riddle {
  id: number;
  clue: string;
  riddle: string;
  answer: string;
}

export interface RiddleCardProps {
  riddle: Riddle;
  isAnswerRevealed: boolean;
  onRevealAnswer: () => void;
}

export interface NavigationProps {
  currentIndex: number;
  totalRiddles: number;
  onPrevious: () => void;
  onNext: () => void;
}