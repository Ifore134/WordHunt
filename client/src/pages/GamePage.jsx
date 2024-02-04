import { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CenterPanel from "../components/CenterPanel";
const GamePage = () => {
  const actualWordLeft = "JELLY";
  const actualWordRight = "APPLE";
  const [guessesLeft, setGuessesLeft] = useState([]);
  const [guessesRight, setGuessesRight] = useState([]);
  const [isYourTurn, setIsYourTurn] = useState(true);
  const [resetFlag, setResetFlag] = useState(false);

  const handleGuessSubmission = (newGuess) => {
    if (isYourTurn) {
      setGuessesLeft((oldGuesses) => [...oldGuesses, newGuess]);
    } else {
      setGuessesRight((oldGuesses) => [...oldGuesses, newGuess]);
    }
    setIsYourTurn(!isYourTurn);
    setResetFlag((flag) => !flag);
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 flex justify-between items-start">
        <LeftPanel
          username="Player 1"
          guesses={guessesLeft}
          actualWord={actualWordLeft}
        />
        <CenterPanel
          actualWord={isYourTurn ? actualWordRight : actualWordLeft}
          isYourTurn={isYourTurn}
          onSubmitGuess={handleGuessSubmission}
          resetInputs={resetFlag}
        />
        <RightPanel
          username="Player 2"
          guesses={guessesRight}
          actualWord={actualWordRight}
        />
      </div>
    </div>
  );
};

export default GamePage;