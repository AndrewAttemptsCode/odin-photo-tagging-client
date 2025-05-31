import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: min(1%, 0.5rem);
  border: 2px solid #0071BC;
  background-color: #FFFFFF;
  border-radius: 10px;

  ol {
    margin: 1.5rem;
    padding: 0.5rem;
    font-size: 1.2rem;

    & li {
      margin-bottom: 8px;
    }

    & li::marker {
      font-family: "Chewy", system-ui;
      color: #FF1D25;
      font-size: 1.5rem;
    }
  }
`

const Logo = styled.h1`
  font-family: "Chewy", system-ui;
  font-size: 2.5rem;
  border-radius: 5px;
  padding: 8px;
  color: #0071BC;

  span {
    color: #FF1D25;
  }
`

const StyledLink = styled(Link)`
  font-family: "Chewy", system-ui;
  text-decoration: none;
  color: #FFF8F0;
  background-color: #0071BC;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-size: 2.5rem;

  &:hover {
    opacity: 0.9;
  }
`

const HomeInfo = () => {
  return (
    <Container>
      <Logo>
        WHERE'S <span>WALLY</span> ?
      </Logo>
      <ol>
        <li>Find Wally's friends and one tough item.</li>
        <li>Click on the image and confirm your guess from the menu.</li>
        <li>The faster you find them, the better your score.</li>
        <li>Compete for a top 10 spot on the leaderboard.</li>
      </ol>
      <StyledLink to={"game"}>Play!</StyledLink>
    </Container>
  );
};

export default HomeInfo;