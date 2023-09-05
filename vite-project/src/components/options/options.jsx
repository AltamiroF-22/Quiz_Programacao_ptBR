import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./options.css";

const options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`op ${
        quizState.answerSlected && option === answer ? "correct" : ""
      } ${quizState.answerSlected && option !== answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default options;
