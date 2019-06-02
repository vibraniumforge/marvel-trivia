import React from "react";

const answerBox = ({ userAnswer, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor="question">Your Answer: </label>
      <input
        id="answerBox"
        className="answer"
        type="text"
        value={userAnswer}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export default answerBox;
