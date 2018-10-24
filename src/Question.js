import React from "react";

const question = ({
  question,
  showCorrectMessage,
  answer,
  showCorrectAnswer
}) => {
  return (
    <React.Fragment>
      <div className="question">
        <label htmlFor="question">Question: {question}</label>
      </div>
      <div
        id="correctResponse"
        className={showCorrectMessage ? "green" : "hidden"}
      >
        <h1>You are correct!</h1>
      </div>
      <div id="correctAnswer" className={showCorrectAnswer ? "red" : "hidden"}>
        <h3>The correct answer was: {answer} </h3>
      </div>
    </React.Fragment>
  );
};

export default question;
