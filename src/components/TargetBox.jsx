import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: ${({$y}) => $y};
  left: ${({$x}) => $x};
  height: 20px;
  width: 20px;
  border: 2px solid red;
  background-color: transparent;
  transform: translate(-50%, -50%);
`

const TargetBox = ({ coords }) => {
  const { x, y } = coords;
  return (
    <Box $x={`${x}px`} $y={`${y}px`}/>
  );
};

export default TargetBox;