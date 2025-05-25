import styled from "styled-components";
import sludge from "../assets/sludge.webp";
import ball from "../assets/ball.webp";
import inflatable from "../assets/inflatable.webp";
import ballboy from "../assets/ballboy.webp";

const Dropdown = styled.div`
  position: absolute;
  top: ${({$y}) => $y};
  left: ${({$x}) => $x};
  transform: translate(20%, 15%);
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

const TargetDropdown = ({ x, y, onGuess }) => {
  return (
    <Dropdown $x={`${x}px`} $y={`${y}px`}>
      <ul>
        <li onClick={() => onGuess('ball')}>
          <img src={ball} />
          Ball
        </li>
        <li onClick={() => onGuess('sludge')}>
          <img src={sludge} />
          Sludge
        </li>
        <li onClick={() => onGuess('ballboy')}>
          <img src={ballboy} />
          Ball Boy
        </li>
        <li onClick={() => onGuess('inflatable')}>
          <img src={inflatable} />
          Inflatable
        </li>
      </ul>
    </Dropdown>
  );
};

export default TargetDropdown;
