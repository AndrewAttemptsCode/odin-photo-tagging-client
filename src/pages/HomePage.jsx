import styled from "styled-components";
import HomeInfo from "../components/HomeInfo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const HomePage = () => {
  return (
    <Container>
      <HomeInfo />
    </Container>
  );
};

export default HomePage;