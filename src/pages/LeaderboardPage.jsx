import styled from "styled-components";
import Leaderboard from "../components/Leaderboard";

const Container = styled.section`
  display: flex;
  justify-content: center;
`

const LeaderboardPage = () => {
  return (
    <Container>
      <Leaderboard />
    </Container>
  );
};

export default LeaderboardPage;