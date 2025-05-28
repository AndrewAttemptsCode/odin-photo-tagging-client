import styled, { keyframes } from "styled-components";

const grow = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AnimatedScore = styled.span`
  display: inline-block;
  color: #00c200;
  animation: 2s ${grow} ease-in-out infinite;
`

const ScoreSummary = ({ scoreCounter }) => {
  return (
    <Container>
      <h1>You found all the items!</h1>
      <p>It took you...</p>
      <p><AnimatedScore>{scoreCounter}</AnimatedScore> seconds!</p>
    </Container>
  );
};

export default ScoreSummary;