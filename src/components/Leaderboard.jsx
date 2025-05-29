import { useEffect, useState } from "react";
import { formatDate, formatTime } from "../utils";
import { Star } from "lucide-react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background-color: #f9f9f9;
  }

  th, td {
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody > tr:hover {
    background-color: #f1f1f1;
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

  if (loading) return <p>Loading...</p>;

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
          <th>Date</th>
          <th>Time</th>
        </tr>    
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.id}>
            <td>{trophySelect(index + 1)}</td>
            <td>{player.username}</td>
            <td>{player.score} secs</td>
            <td>{formatDate(player.createdAt)}</td>
            <td>{formatTime(player.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Leaderboard;