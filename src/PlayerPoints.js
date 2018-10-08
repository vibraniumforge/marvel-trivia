import React from "react";

const playerPoints = ({ userPoints }) => {
  return (
    <React.Fragment>
      <div className="question">
        <h3 className="green">Your Points: {userPoints}</h3>
      </div>
    </React.Fragment>
  );
};

export default playerPoints;
