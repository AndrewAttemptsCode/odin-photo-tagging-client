import styled from "styled-components";
import TargetBox from "./TargetBox";
import { useState } from "react";
import beach from "../assets/beach.webp";

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  max-width: 900px;
  cursor: crosshair;

  & img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`

const GameImage = () => {
  const [targetClick, setTargetClick] = useState(false);
  const [pixelCoords, setPixelCoords] = useState({x: 0, y: 0});
  const [normalizedCoords, setNormalizedCoords] = useState({x: 0, y: 0});

  const handleGuess = (name) => {
    alert(name);
  };

  const handleClick = (event) => {
    const container = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - container.left;
    const y = event.clientY - container.top;

    const normalizedX = x / container.width;
    const normalizedY = y / container.height;

    console.log(`Normalized X: ${normalizedX}, normalized Y: ${normalizedY}`);
    console.log(`click: pos x: ${x} pos y: ${y}`);

    setPixelCoords({x, y});
    setNormalizedCoords({x: normalizedX, y: normalizedY});
    setTargetClick(!targetClick);
  }

  return (
    <ImageContainer onClick={handleClick}>
      <img src={beach} alt="" />
      {targetClick && <TargetBox pixelCoords={pixelCoords} handleGuess={handleGuess} />}
    </ImageContainer>
  );
};

export default GameImage;
