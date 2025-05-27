import styled from "styled-components";
import GameKey from "./GameKey";

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  border: 1px solid red;
`

const GameControls = ({ correctGuesses }) => {
  return (
    <Container>
      <GameKey correctGuesses={correctGuesses} />
    </Container>
  );
};

export default GameControls;
