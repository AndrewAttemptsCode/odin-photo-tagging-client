import TargetMarker from "./TargetMarker";
import TargetDropdown from "./TargetDropdown";

const TargetBox = ({ pixelCoords, handleGuess }) => {
  const { x, y } = pixelCoords;
  return (
    <>
    <TargetMarker x={x} y={y} />
    <TargetDropdown x={x} y={y} onGuess={handleGuess} />
    </>
  );
};

export default TargetBox;