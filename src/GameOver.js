import React from "react";

const gameOver = ({ gameOver, userPoints }) => {
  return (
    <React.Fragment>
      <div id="gameOver">
        <h1 className="red">Game over.</h1>
        <h1 className="green">You won {userPoints} points!</h1>
      </div>
    </React.Fragment>
  );
};

export default gameOver;
