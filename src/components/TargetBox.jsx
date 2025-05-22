import TargetMarker from "./TargetMarker";
import TargetDropdown from "./TargetDropdown";

const TargetBox = ({ pixelCoords }) => {
  const { x, y } = pixelCoords;
  return (
    <>
    <TargetMarker x={x} y={y} />
    <TargetDropdown x={x} y={y} />
    </>
  );
};

export default TargetBox;