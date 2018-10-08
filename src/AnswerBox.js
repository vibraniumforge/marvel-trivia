import React from "react";

const answerBox = ({ userAnswer, onChange, gameOver }) => {
  return (
    <React.Fragment>
      <label htmlFor="question">Answer: </label>
      <input
        id="answerBox"
        className="answer"
        type="text"
        value={userAnswer}
        onChange={onChange}
        placeholder="Your answer"
      />
    </React.Fragment>
  );
};

export default answerBox;
