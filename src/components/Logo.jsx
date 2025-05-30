import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Chewy", system-ui;
  font-size: 1.5rem;
  background-color: #FFF8F0;
  border-radius: 5px;
  padding: 8px;
  color: #0071BC;
  cursor: pointer;

  span {
    color: #FF1D25;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #fdf0e1;
  }
`

const Logo = () => {
  return (
    <Container>
      <NavLink to={"/"}>
        WHERE'S <span>WALLY</span> ?
      </NavLink>
    </Container>
  );
};

export default Logo;