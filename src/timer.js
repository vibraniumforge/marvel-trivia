import React from "react";
import "./index.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  //old version

  // componentDidMount() {
  //   const secondHand = document.querySelector(".second-hand");
  //   function setDate() {
  //     const now = new Date();
  //     const seconds = now.getSeconds();
  //     const secondsDegrees = (seconds / 60) * 360 + 90;
  //     secondHand.style.transform = `rotate(${-secondsDegrees}deg)`;
  //   }
  //   this.setHand();
  // }





  // componentDidMount() {
  //   const secondHand = document.querySelector(".second-hand");
  //   function setTime() {
  //     secondHand.style.transform = `rotate(${
  //       props.secondsRemaining ? props.secondsRemaining : 0
  //     }deg)`;
  //   }
  //   setInterval(setTime, 1000);
  //   setTime();
  // }

  // setHand() {
  //   setInterval(this.setHand, 1000);
  //   const secondHand = document.querySelector(".second-hand");
  //   secondHand.style.transform = `rotate(${this.props.secondsRemainig*-6}deg)`
  // }

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
