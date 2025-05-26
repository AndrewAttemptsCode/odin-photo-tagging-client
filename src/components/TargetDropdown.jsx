import styled from "styled-components";
import sludge from "../assets/sludge.webp";
import ball from "../assets/ball.webp";
import inflatable from "../assets/inflatable.webp";
import ballboy from "../assets/ballboy.webp";
import { useEffect, useState } from "react";

const Dropdown = styled.div`
  position: absolute;
  top: ${({$y}) => $y};
  left: ${({$x}) => $x};
  transform: ${({$direction}) => 
    $direction === "up" ? "translate(20%, -100%)" : "translate(20%, 15%)"};
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    & li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8px;
      color: #cccccc;
      border-radius: 5px;

      & img {
        width: 30px;
        height: 30px;
      }
    }

    & li:hover {
      background-color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
    }
  }
`

const TargetDropdown = ({ x, y, onGuess, correctGuesses }) => {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const dropdownHeight = 400;
    const windowHeight = window.innerHeight - y;
    setDirection(windowHeight < dropdownHeight ? "up" : "down");
  }, [y]);

  const guessOptions = [
    { name: "ball", label: "Ball", img: ball },
    { name: "sludge", label: "Sludge", img: sludge },
    { name: "ballboy", label: "Ball Boy", img: ballboy },
    { name: "inflatable", label: "Inflatable", img: inflatable },
  ];

  const options = guessOptions.filter((option) => !correctGuesses.includes(option.name));
  
  return (
    <Dropdown $x={`${x}px`} $y={`${y}px`} $direction={direction}>
      <ul>
        {options.map(({ name, label, img }) => (
        <li key={name} onClick={() => onGuess(name)}>
          <img src={img} alt="" />
          {label}
        </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default TargetDropdown;
