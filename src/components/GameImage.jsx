import styled from "styled-components";
import TargetBox from "./TargetBox";
import { useState } from "react";
import beach from "../assets/beach.webp";

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  max-width: 900px;
  border-radius: 10px;
  background-color: aquamarine;
  cursor: crosshair;

  & img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const GameImage = () => {
  const [targetClick, setTargetClick] = useState(false);
  const [coords, setCoords] = useState({x: null, y: null});

  const handleClick = (event) => {
    const container = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - container.left;
    const y = event.clientY - container.top;
    console.log(`click: pos x: ${x} pos y: ${y}`);
    setCoords({x, y});
    setTargetClick(!targetClick);
  }

  return (
    <ImageContainer onClick={handleClick}>
      <img src={beach} alt="" />
      {targetClick && <TargetBox coords={coords} />}
    </ImageContainer>
  );
};

export default GameImage;
