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
  const [pixelCoords, setPixelCoords] = useState({ x: 0, y: 0 });
  const [normalizedCoords, setNormalizedCoords] = useState({ x: 0, y: 0 });

  const handleGuess = (name) => {
    const { x, y } = normalizedCoords;

    const items = [ 
      { name: 'ball', x: 0.67, y: 0.64, deviation: 0.02 },
      { name: 'sludge', x: 0.34, y: 0.90, deviation: 0.03 },
      { name: 'ballboy', x: 0.35, y: 0.49, deviation: 0.045 },
      { name: 'inflatable', x: 0.60, y: 0.88, deviation: 0.045 }, 
    ];

    const guess = items.find(item => item.name === name);
    if (Math.abs(x - guess.x) < guess.deviation && Math.abs(y - guess.y) < guess.deviation) {
      alert(`You got the ${guess.name}`);
    }

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
