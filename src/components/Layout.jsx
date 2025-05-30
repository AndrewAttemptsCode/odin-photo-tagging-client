import { Outlet } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100dvh;
  min-height: 100vh;
  background-color: #FFF8F0;
  color: #1E1E1E;
`

const Layout = () => {
  return (
    <Container>
      <header>
        <HeaderSection />
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;