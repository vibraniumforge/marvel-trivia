import React from "react";

const question = ({ question, showCorrectMessage }) => {
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
    </React.Fragment>
  );
};

export default question;
