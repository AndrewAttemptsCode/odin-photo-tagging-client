import TargetMarker from "./TargetMarker";
import TargetDropdown from "./TargetDropdown";

const TargetBox = ({ coords }) => {
  const { x, y } = coords;
  return (
    <>
    <TargetMarker x={x} y={y} />
    <TargetDropdown x={x} y={y} />
    </>
  );
};

export default TargetBox;