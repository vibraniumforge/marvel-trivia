import React from "react";
// import Marvel from "marvel.png"

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: 15
    };
  }

  componentDidMount() {
    const secondHand = document.querySelector(".second-hand");
    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${-secondsDegrees}deg)`;
    }
    setInterval(setDate, 1000);
    setDate();
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
