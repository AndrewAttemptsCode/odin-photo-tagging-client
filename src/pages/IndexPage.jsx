import styled from "styled-components";
import GameImage from "../components/GameImage";
import GameControls from "../components/GameControls";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  
  return (
    <Container>
      <GameImage correctGuesses={correctGuesses} setCorrectGuesses={setCorrectGuesses} />
      <GameControls correctGuesses={correctGuesses} />
    </Container>
  );
};

export default IndexPage;