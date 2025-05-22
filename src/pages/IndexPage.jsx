import styled from "styled-components";
import GameImage from "../components/GameImage";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const IndexPage = () => {
  return (
    <Container>
      <GameImage />
    </Container>
  );
};

export default IndexPage;