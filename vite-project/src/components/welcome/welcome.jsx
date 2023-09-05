import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Quiz from "../../images/quiz.svg";

import "./welcome.css";

const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="quiz svg" />
    </div>
  );
};

export default welcome;
