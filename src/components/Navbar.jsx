import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  font-family: "Chewy", system-ui;
  font-size: 1.5rem;
`

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #FFFFFF;

  &:hover {
    color: #fdf0e1;
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #FFFFFF;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <StyledNavLink to={"/"}>Home</StyledNavLink>
      <StyledNavLink to={"game"}>Play</StyledNavLink>
      <StyledNavLink to={"leaderboard"}>Leaderboard</StyledNavLink>
    </Nav>
  );
};

export default Navbar;