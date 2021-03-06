import React from "react";
import Marvel from "./images/marvel.png";

const header = () => {
  return (
    <React.Fragment>
      <h1>
        Welcome to the <img src={Marvel} alt={"Marvel Logo"} /> Cinematic
        Universe Trivia App!
      </h1>
      <h3>Answer quickly to win more points!</h3>
      <h4>(Case insensitive)</h4>
    </React.Fragment>
  );
};

export default header;
