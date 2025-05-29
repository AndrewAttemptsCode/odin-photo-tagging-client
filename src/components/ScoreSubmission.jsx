import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/leaderboard`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, score: scoreCounter }),
      })

      if (response.ok) {
        navigate("/leaderboard");
      }

    } catch (err) {
      console.error("Score submission error: ", err);
    } finally {
      setLoading(false);
    }
  }

  const handleOnChange = (event) => {
    setUsername(event.target.value);
  }

  return (
    <Container>
      <h2>Enter your name to be placed on the leaderboard.</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" id="username" placeholder="Enter your name..." value={username} onChange={handleOnChange}/>
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Submit"}</button>
      </form>
    </Container>
  );
};

export default ScoreSubmission;