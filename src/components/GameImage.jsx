import styled from "styled-components";
import TargetBox from "./TargetBox";
import { useState } from "react";

const Image = styled.div`
  position: relative;
  height: 400px;
  width: 800px;
  background-color: aquamarine;
  cursor: crosshair;
`

const GameImage = () => {
  const [targetClick, setTargetClick] = useState(false);
  const [coords, setCoords] = useState({x: '', y: ''});

  const handleClick = (event) => {
    const container = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - container.left;
    const y = event.clientY - container.top;
    console.log(`click: pos x: ${x} pos y: ${y}`);
    setCoords({x, y});
    setTargetClick(!targetClick);
  }

  return (
    <Image onClick={handleClick}>
      {targetClick && <TargetBox coords={coords} />}
    </Image>
  );
};

export default GameImage;
