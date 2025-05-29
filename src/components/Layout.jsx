import { Outlet } from "react-router-dom";
import HeaderSection from "./HeaderSection";

const Layout = () => {
  return (
    <div>
      <header>
        <HeaderSection />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;