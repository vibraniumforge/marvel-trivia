import React from "react";
import "./index.css";

class Timer extends React.Component {
  componentDidMount() {
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${90 -
      this.props.secondsRemaining * -6}deg)`;
  }

  componentDidUpdate() {
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${90 -
      this.props.secondsRemaining * -6}deg)`;
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <div className="secondhand second-hand" />
        </div>
      </div>
    );
  }
}

export default Timer;
