import styled from "styled-components";

const Container = styled.div`
  margin: 0 0.5rem;
  font-size: 1.2rem;
`

const ItemsFound = ({ correctGuesses, guessOptions }) => {
  return (
    <Container>
      Items Found: {correctGuesses.length} / {guessOptions.length}
    </Container>
  );
};

export default ItemsFound;