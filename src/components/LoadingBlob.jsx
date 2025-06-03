import styled, { keyframes } from "styled-components";

const grow = keyframes`
  0%, 100% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  gap: 15px;
`

const Blob = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${grow} 1.5s ease-in-out infinite;
  animation-delay: ${({$delay}) => `${$delay}ms` };
`

const LoadingBlob = () => {
  return (
    <Container>
      <Blob $delay={0} />
      <Blob $delay={200} />
      <Blob $delay={400} />
    </Container>
  )
};

export default LoadingBlob;