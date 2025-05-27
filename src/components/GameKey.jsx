import styled from "styled-components";

const Container = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
`

const ListItem = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
  text-align: center;
  list-style: none;
  opacity: ${({$correct}) => ($correct ? "0.5" : "1")};
  
  img {
    height: 60px;
    width: 60px;
    border-radius: 5px;
    filter: ${({$correct}) => ($correct ? "grayscale(100%)" : "none")};
  }
`

const GameKey = ({ correctGuesses, guessOptions }) => {
  
  return (
    <Container>
      <ul>
        {guessOptions.map(({ name, label, img }) => (
          <ListItem key={name} $correct={correctGuesses.includes(name)}>
            <img src={img} alt="" />
            {label}
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default GameKey;