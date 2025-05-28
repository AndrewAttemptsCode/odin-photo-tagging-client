import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5rem;
`

const ScoreCounter = ({ counter }) => {
  return (
    <Container>
      <strong>Current Score</strong>
      {counter} secs
    </Container>
  );
};

export default ScoreCounter;