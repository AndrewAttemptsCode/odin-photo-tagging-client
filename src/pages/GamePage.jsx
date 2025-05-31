import styled from "styled-components";
import GameImage from "../components/GameImage";
import GameControls from "../components/GameControls";
import { useEffect, useMemo, useState } from "react";

import sludge from "../assets/sludge.webp";
import ball from "../assets/ball.webp";
import inflatable from "../assets/inflatable.webp";
import ballboy from "../assets/ballboy.webp";
import GameOverPopup from "../components/GameOverPopup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 3rem;
  gap: 8px;
`

const GamePage = () => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [scoreCounter, setScoreCounter] = useState(0);

  const guessOptions = useMemo(() => {
    return [
    { name: "ball", label: "Ball", img: ball },
    { name: "sludge", label: "Sludge", img: sludge },
    { name: "ballboy", label: "Ball Boy", img: ballboy },
    { name: "inflatable", label: "Inflatable", img: inflatable },
  ];
  }, []);

  const gameOver = correctGuesses.length === guessOptions.length;
  
  useEffect(() => {
    if (!gameOver) {
      const counter = setInterval(() => {
      setScoreCounter(prev => prev + 1);
    }, 1000);
    return () => clearInterval(counter);
    }
  }, [gameOver]);

  return (
    <Container>
      <GameImage correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses} guessOptions={guessOptions} />
      <GameControls correctGuesses={correctGuesses} guessOptions={guessOptions} scoreCounter={scoreCounter} />
      {gameOver && <GameOverPopup scoreCounter={scoreCounter} />}
    </Container>
  );
};

export default GamePage;