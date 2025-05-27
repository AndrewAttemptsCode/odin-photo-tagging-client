import styled from "styled-components";
import sludge from "../assets/sludge.webp";
import ball from "../assets/ball.webp";
import inflatable from "../assets/inflatable.webp";
import ballboy from "../assets/ballboy.webp";

const Container = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
`

const ListItem = styled.li`
  display: inline-block;
  margin: 0.5rem;
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

const GameKey = ({ correctGuesses }) => {

  const guessOptions = [
      { name: "ball", label: "Ball", img: ball },
      { name: "sludge", label: "Sludge", img: sludge },
      { name: "ballboy", label: "Ball Boy", img: ballboy },
      { name: "inflatable", label: "Inflatable", img: inflatable },
    ];
  
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