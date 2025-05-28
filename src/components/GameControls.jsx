import styled from "styled-components";
import GameKey from "./GameKey";
import ItemsFound from "./ItemsFound";
import ScoreCounter from "./ScoreCounter";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  border: 1px solid red;
`

const GameControls = ({ correctGuesses, guessOptions, scoreCounter }) => {
  return (
    <Container>
      <div>
        <ItemsFound correctGuesses={correctGuesses} guessOptions={guessOptions} />
        <GameKey correctGuesses={correctGuesses} guessOptions={guessOptions} />
      </div>
      <ScoreCounter counter={scoreCounter} />
    </Container>
  );
};

export default GameControls;
