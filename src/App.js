import React from "react";
import questionChooser from "./Questions.js";
import Timer from "./Timer.js";
import Header from "./Header.js";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theChoice: "",
      question: "",
      answer: "",
      userAnswer: "",
      showCorrectMessage: false,
      userPoints: 0,
      secondsRemaining: 15,
      gameOver: false,
      gameLength: 10,
      startTime: ""
    };

    // this.onChange = this.onChange.bind(this);
    this.prepare = this.prepare.bind(this);
    this.compareAnswer = this.compareAnswer.bind(this);
    this.showCorrectMessage = this.showCorrectMessage.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentWillMount() {
    this.prepare();
  }

  componentDidUpdate() {
    if (this.state.secondsRemaining <= 0) {
      this.stopTimer();
      this.prepare();
      this.setState({ secondsRemaining: 15 });
    }
  }

  prepare() {
    if (this.state.gameLength) {
      let { question, answer } = questionChooser();
      this.setState(
        {
          question,
          answer,
          userAnswer: "",
          showCorrectMessage: false,
          gameLength: this.state.gameLength - 1
        },
        this.startTimer
      );
    } else {
      this.setState({ gameOver: true });
    }
  }

  onChange(e) {
    this.setState({ userAnswer: e.target.value }, this.compareAnswer);
  }

  compareAnswer() {
    if (
      this.state.userAnswer !== "" &&
      this.state.userAnswer.toLowerCase().trim() ===
        this.state.answer.toLowerCase().trim()
    ) {
      this.showCorrectMessage();
    }
  }

  showCorrectMessage = () => {
    this.setState(prevState => ({
      showCorrectMessage: true,
      userPoints: prevState.userPoints + prevState.secondsRemaining,
      secondsRemaining: 15
    }));
    setTimeout(this.prepare, 1000);
    this.stopTimer();
    clearInterval(this.timer);
  };

  startTimer() {
    this.timer = setInterval(
      () =>
        this.setState({ secondsRemaining: this.state.secondsRemaining - 1 }),
      1000
    );
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  render() {
    console.log("this.state.userPoints=", this.state.userPoints);
    console.log("this.state.secondsRemaining=", this.state.secondsRemaining);
    console.log("this.state.gameLength=", this.state.gameLength);
    console.log("this.state.question=", this.state.question);
    console.log("this.state.answer=", this.state.answer);
    return (
      <React.Fragment>
        <Header />
        <div>
          <div className="question">
            <label htmlFor="question">Question: {this.state.question}</label>
          </div>
          <div
            id="correctResponse"
            className={this.state.showCorrectMessage ? "green" : "hidden"}
          >
            <h1>You are correct!</h1>
          </div>
          <div id="theDomAnswer" className="white">
            {this.state.answer}
          </div>
          <br />
          <div className="answer">
            <label htmlFor="question">Answer: </label>
            <input
              id="answerBox"
              className="answer"
              type="text"
              value={this.state.userAnswer}
              onChange={this.onChange.bind(this)}
              placeholder="Your answer"
            />
            <div
              id="gameOver"
              className={this.state.gameOver ? "red" : "hidden"}
            >
              <h1>Game over.</h1>
              <h1>You won {this.state.userPoints} points!</h1>
            </div>
          </div>
        </div>
        <Timer secondsRemaining={this.state.secondsRemaining} />
      </React.Fragment>
    );
  }
}

export default Main;
