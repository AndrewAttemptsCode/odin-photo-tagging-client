import styled from "styled-components";

const Container = styled.div`
  margin: 0 0.5rem;
  font-size: 1.2rem;
  font-family: "Chewy", system-ui;
  color: #0071BC;

  span {  
    color: #FF1D25;
  }
`

const ItemsFound = ({ correctGuesses, guessOptions }) => {
  return (
    <Container>
      Items Found <span>{correctGuesses.length} / {guessOptions.length}</span>
    </Container>
  );
};

export default ItemsFound;