import { Outlet } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "header"
    "main";
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #FFF8F0;
  color: #1E1E1E;

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }
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