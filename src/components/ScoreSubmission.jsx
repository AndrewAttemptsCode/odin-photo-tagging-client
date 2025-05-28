import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  & h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`

const ScoreSubmission = ({ scoreCounter }) => {

  const handleSubmit = () => {
    // TODO: post to leaderboard with username
    // needs restful server route
    // post username and scorecounter
  }

  return (
    <Container>
      <h2>Enter your name to be placed on the leaderboard.</h2>
      <form action={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" id="username" placeholder="Enter your name..." />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default ScoreSubmission;