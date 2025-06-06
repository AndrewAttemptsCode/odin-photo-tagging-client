import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ScoreSummary from "./ScoreSummary";
import ScoreSubmission from "./ScoreSubmission";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 450px;
  width: 100%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  border: 4px solid #0071BC;
  border-radius: 10px;
  padding: 1rem;
`

const GameOverPopup = ({ scoreCounter }) => {
  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate("/");
  }
  
  return (
    <>
      <Backdrop onClick={handleOnClose} />
      <Modal>
        <ScoreSummary scoreCounter={scoreCounter} />
        <hr />
        <ScoreSubmission scoreCounter={scoreCounter} />
      </Modal>
    </>
  );
};

export default GameOverPopup;