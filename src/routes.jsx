import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <IndexPage />}, 
    ]
  },
]);

export default routes;
