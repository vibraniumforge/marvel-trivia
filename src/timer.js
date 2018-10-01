import React from "react";
import "./App.css"

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const secondHand = document.querySelector(".second-hand");
    // function setDate() {
    //   const now = new Date();
    //   const seconds = now.getSeconds();
    //   const secondsDegrees = (seconds / 60) * 360 + 90;
    //   secondHand.style.transform = `rotate(${-secondsDegrees}deg)`;
    // }
  
    this.setHand();
  }


  setHand() {
    setInterval(this.setHand, 1000);
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${this.props.secondsRemainig*-6}deg)`
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
