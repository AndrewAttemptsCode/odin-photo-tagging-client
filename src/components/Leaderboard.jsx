import { useEffect, useState } from "react";
import { formatDate, formatTime } from "../utils";
import { Star } from "lucide-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingBlob from "./LoadingBlob";

const Table = styled.table`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  border: 2px solid #0071BC;
  user-select: none;

  th, td {
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  thead {
    background-color: #0071BC;
    color: #FFFFFF;
    font-family: "Chewy", system-ui;
    font-size: 1.5rem;
  }
`

const ThHide = styled.th`
  @media (max-width: 480px) {
    display: none;
  }
`

const TdHide = styled.td`
  @media (max-width: 480px) {
    display: none;
  }
`

const NoPlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 900px;
  border: 2px solid #0071BC;
  border-radius: 15px;
  padding: 1rem;
  background-color: #FFFFFF;
  font-family: "Chewy", system-ui;

  h1 {
    font-size: 2rem;
    color: #0071BC;
  }

  p {
    font-size: 2rem;
    color: #FF1D25;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFF8F0;
  background-color: #0071BC;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-size: 2rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

const Leaderboard = () => {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/leaderboard`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setPlayers(data);

      } catch (err) {
        console.error("failed to fetch leaderboard: ", err);
      } finally {
        setLoading(false);
      }
    }
  getLeaderboard();
  }, []);

  if (loading) return <LoadingBlob />;

  if (players.length === 0) {
    return (
      <NoPlayersContainer>
        <h1>Leaderboard is empty</h1>
        <p>Be the first!</p>
        <StyledLink to={"/game"}>Play!</StyledLink>
      </NoPlayersContainer>
    );
  };

  const trophySelect = (position) => {
    if (position === 1) {
      return <div style={{display: "flex", justifyContent: "center"}}><Star fill="#FFD700" /></div>
    } else if (position === 2) {
      return <div style={{display: "flex", justifyContent: "center"}}><Star fill="#C0C0C0" /></div>
    } else if (position === 3) {
      return <div style={{display: "flex", justifyContent: "center"}}><Star fill="#CD7F32" /></div>
    } else {
      return position
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Score</th>
          <ThHide>Date</ThHide>
          <ThHide>Time</ThHide>
        </tr>    
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.id}>
            <td>{trophySelect(index + 1)}</td>
            <td>{player.username}</td>
            <td>{player.score} secs</td>
            <TdHide>{formatDate(player.createdAt)}</TdHide>
            <TdHide>{formatTime(player.createdAt)}</TdHide>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Leaderboard;