import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initaialStage = {
  gameStage: STAGES.at(0),
  questions,
  currentQuestion: 0,
  score: 0,
  answerSlected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES.at(1),
      };
    case "REORDER_QUESTIONS":
      const reorder = questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        reorder,
      };

    case "CHANGE_QUESTION":
      const nexQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nexQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nexQuestion,
        gameStage: endGame ? STAGES.at(2) : state.gameStage,
        answerSlected: false,
      };

    case "GAME_OVER":
      return initaialStage;

    case "CHECK_ANSWER":
      if (state.answerSlected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSlected: option,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initaialStage);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
