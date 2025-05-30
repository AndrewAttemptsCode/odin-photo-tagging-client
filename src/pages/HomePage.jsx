import styled from "styled-components";
import HomeInfo from "../components/HomeInfo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
`

const HomePage = () => {
  return (
    <Container>
      <HomeInfo />
    </Container>
  );
};

export default HomePage;