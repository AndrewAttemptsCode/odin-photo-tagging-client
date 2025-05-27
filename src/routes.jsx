import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import GamePage from "./pages/GamePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <GamePage />}, 
    ]
  },
]);

export default routes;
