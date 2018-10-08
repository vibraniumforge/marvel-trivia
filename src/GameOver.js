import React from "react";

const gameOver = ({ gameOver, userPoints }) => {
  return (
    <React.Fragment>
      <div id="gameOver" className="red">
        <h1>Game over.</h1>
        <h1>You won {userPoints} points!</h1>
      </div>
    </React.Fragment>
  );
};

export default gameOver;
