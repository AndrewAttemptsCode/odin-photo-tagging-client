import styled from "styled-components";
import GameImage from "../components/GameImage";
import GameControls from "../components/GameControls";
import { useState } from "react";

import sludge from "../assets/sludge.webp";
import ball from "../assets/ball.webp";
import inflatable from "../assets/inflatable.webp";
import ballboy from "../assets/ballboy.webp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  
  const guessOptions = [
    { name: "ball", label: "Ball", img: ball },
    { name: "sludge", label: "Sludge", img: sludge },
    { name: "ballboy", label: "Ball Boy", img: ballboy },
    { name: "inflatable", label: "Inflatable", img: inflatable },
  ];

  return (
    <Container>
      <GameImage correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses} guessOptions={guessOptions} />
      <GameControls correctGuesses={correctGuesses} guessOptions={guessOptions} />
    </Container>
  );
};

export default IndexPage;