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

  h1 {
    font-family: "Chewy", system-ui;
    font-size: 2rem;
    color: #0071BC;
    text-align: center;

    span {
      color: #FF1D25;
    }
  }

  p {
    font-size: 1.4rem;
  }
`

const AnimatedScore = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  color: #00c200;
  animation: 2s ${grow} ease-in-out infinite;
`

const ScoreSummary = ({ scoreCounter }) => {
  return (
    <Container>
      <h1>You found all the items <span>!</span></h1>
      <p>It took you...</p>
      <AnimatedScore>{scoreCounter}</AnimatedScore>
      <p>seconds!</p>
    </Container>
  );
};

export default ScoreSummary;