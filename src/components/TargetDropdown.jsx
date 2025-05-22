import styled from "styled-components";

const Dropdown = styled.div`
  position: absolute;
  top: ${({$y}) => $y};
  left: ${({$x}) => $x};
  transform: translate(20%, 15%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    & li {
      padding: 0 8px;
    }

    & li:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
`

const TargetDropdown = ({ x, y, onGuess }) => {
  return (
    <Dropdown $x={`${x}px`} $y={`${y}px`}>
      <ul>
        <li onClick={() => onGuess('ball')}>Ball</li>
        <li onClick={() => onGuess('sludge')}>Sludge</li>
        <li onClick={() => onGuess('ballboy')}>Ball Boy</li>
        <li onClick={() => onGuess('inflatable')}>Inflatable</li>
      </ul>
    </Dropdown>
  );
};

export default TargetDropdown;
