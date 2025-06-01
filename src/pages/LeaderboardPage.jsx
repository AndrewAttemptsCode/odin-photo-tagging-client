import styled from "styled-components";
import Leaderboard from "../components/Leaderboard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

const LeaderboardPage = () => {
  return (
    <Container>
      <Leaderboard />
    </Container>
  );
};

export default LeaderboardPage;