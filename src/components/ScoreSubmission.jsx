import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 5px;
    text-align: center;
  }

  input, button {
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid #0071BC;
    background-color: #FFFFFF;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 113, 188, 0.2);
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
  }

  label {
    position: absolute;
    font-size: 1rem;
    top: 0.5rem;
    left: 0.5rem;
    pointer-events: none;
    transition: 0.2s ease all;
    color: #888;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -0.5rem;
    left: 0.5rem;
    font-size: 0.8rem;
    color: #333;
    background-color: #FFFFFF;
    padding: 0 0.2rem;
  }

  button {
    font-family: "Chewy", system-ui;
    font-size: 1.5rem;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #0071BC;
    transition: opacity 0.2s ease;
  }

  button:hover {
    opacity: 0.9;
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
        <input type="text" name="username" id="username" placeholder="" value={username} onChange={handleOnChange}/>
        <label htmlFor="username">Name</label>
        <button type="submit" disabled={loading}>{loading ? "Processing..." : "Submit"}</button>
      </form>
    </Container>
  );
};

export default ScoreSubmission;