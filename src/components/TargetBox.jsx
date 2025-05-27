import TargetMarker from "./TargetMarker";
import TargetDropdown from "./TargetDropdown";

const TargetBox = ({ pixelCoords, handleGuess, correctGuesses, guessOptions }) => {
  const { x, y } = pixelCoords;
  return (
    <>
    <TargetMarker x={x} y={y} />
    <TargetDropdown x={x} y={y} onGuess={handleGuess} correctGuesses={correctGuesses} guessOptions={guessOptions} />
    </>
  );
};

export default TargetBox;