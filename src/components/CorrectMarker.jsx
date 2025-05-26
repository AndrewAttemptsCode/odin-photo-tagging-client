import styled from "styled-components";

const Marker = styled.div`
  position: absolute;
  top: ${({$y}) => $y};
  left: ${({$x}) => $x};
  height: 35px;
  width: 35px;
  border: 2px solid green;
  background-color: transparent;
  transform: translate(-50%, -50%);
`

const CorrectMarker = ({ markers }) => {
  return (
    <>
      {markers.map((marker, index) => (
        <Marker key={index} $x={`${marker.x}px`} $y={`${marker.y}px`} />
      ))}
    </>
  ); 
};

export default CorrectMarker;