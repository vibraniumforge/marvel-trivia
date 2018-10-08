import React from "react";

const questionsRemaining = ({ questionsRemaining }) => {
  return (
    <React.Fragment>
      <div className="question">
        <h3 className="green">Questions Remaining: {questionsRemaining}</h3>
      </div>
    </React.Fragment>
  );
};

export default questionsRemaining;
