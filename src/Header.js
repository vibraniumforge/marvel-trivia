import React from "react";
import Marvel from "./images/marvel.png";

const header = () => {
  return (
    <React.Fragment>
      <h1>
        Welcome to my <img src={Marvel} alt={"Marvel Logo"} /> Trivia App!
      </h1>
      <h3>Answer quickly to win points!</h3>
      <hr />
    </React.Fragment>
  );
};

export default header;
