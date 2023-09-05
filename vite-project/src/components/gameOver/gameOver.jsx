import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import GameOverImage from "../../images/welldone.svg";

import "./gameOver.css";

const gameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Portuação: {quizState.score} </p>
      <p>
        Você acertou: {quizState.score} de {quizState.questions.length}{" "}
      </p>
      <img src={GameOverImage} alt="game over svg" />
      <button
        onClick={() => {
          dispatch({ type: "GAME_OVER" });
        }}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default gameOver;
