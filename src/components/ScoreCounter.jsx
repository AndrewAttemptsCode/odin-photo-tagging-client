import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  color: #0071BC;
  font-family: "Chewy", system-ui;
  font-size: 1.3rem;

  strong {
    color: #FF1D25;
    font-size: 1.5rem;
  }
`

const ScoreCounter = ({ counter }) => {
  return (
    <Container>
      <strong>Current Score</strong>
      <p>{counter}</p> seconds
    </Container>
  );
};

export default ScoreCounter;