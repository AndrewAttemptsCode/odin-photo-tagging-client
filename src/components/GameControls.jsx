import styled from "styled-components";
import GameKey from "./GameKey";
import ItemsFound from "./ItemsFound";

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  border: 1px solid red;
`

const GameControls = ({ correctGuesses, guessOptions }) => {
  return (
    <Container>
      <ItemsFound correctGuesses={correctGuesses} guessOptions={guessOptions} />
      <GameKey correctGuesses={correctGuesses} guessOptions={guessOptions} />
    </Container>
  );
};

export default GameControls;
