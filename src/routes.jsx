import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import GamePage from "./pages/GamePage";
import LeaderboardPage from "./pages/LeaderboardPage";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "game", element: <GamePage />},
      { path: "leaderboard", element: <LeaderboardPage /> }, 
    ]
  },
]);

export default routes;
