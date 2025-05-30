import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #FF1D25;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const HeaderSection = () => {
  return (
    <Container>
      <Logo />
      <Navbar />
    </Container>
  );
};

export default HeaderSection;