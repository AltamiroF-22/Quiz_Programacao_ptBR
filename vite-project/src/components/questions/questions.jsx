import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../options/options";

import "./questions.css";

const questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestionConst = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestionConst.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta de {quizState.currentQuestion + 1} a{" "}
        {quizState.questions.length}
      </p>
      <h2>{currentQuestionConst.question}</h2>
      <div id="options-container">
        {currentQuestionConst.options.map((option, index) => (
          <Option
            key={index}
            option={option}
            answer={currentQuestionConst.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>

      {quizState.answerSlected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default questions;
