import React from "react";
import questionChooser from "./QuestionList.js";
import Timer from "./Timer.js";
import Header from "./Header.js";
import AnswerBox from "./AnswerBox.js";
import Question from "./Question.js";
import GameOver from "./GameOver.js";

class Main extends React.Component {
  state = {
    question: "",
    answer: "",
    userAnswer: "",
    showCorrectMessage: false,
    userPoints: 0,
    secondsRemaining: 15,
    gameOver: false,
    gameLength: 10
  };

  componentDidMount() {
    this.prepare();
  }

  componentDidUpdate() {
    if (this.state.secondsRemaining <= 0) {
      this.stopTimer();
      this.prepare();
    }
  }

  prepare = () => {
    if (this.state.gameLength) {
      let { question, answer } = questionChooser();
      this.setState(
        prevState => ({
          question,
          answer,
          userAnswer: "",
          showCorrectMessage: false,
          gameLength: prevState.gameLength - 1,
          secondsRemaining: 15
        }),
        this.startTimer
      );
    } else {
      this.setState({ gameOver: true, userAnswer: "" });
    }
  };

  onChange = e => {
    this.setState({ userAnswer: e.target.value }, this.compareAnswer);
  };

  compareAnswer = () => {
    if (
      this.state.userAnswer !== "" &&
      this.state.userAnswer.toLowerCase().trim() ===
        this.state.answer.toLowerCase().trim()
    ) {
      this.showCorrectMessage();
    }
  };

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

  startTimer = () => {
    this.timer = setInterval(
      () =>
        this.setState(prevState => ({
          secondsRemaining: prevState.secondsRemaining - 1
        })),
      1000
    );
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Question
          question={this.state.question}
          showCorrectMessage={this.state.showCorrectMessage}
          gameOver={this.state.gameOver}
        />

        <div id="theDomAnswer" className="white">
          {this.state.answer}
        </div>
        <br />
        <AnswerBox
          userAnswer={this.state.userAnswer}
          onChange={this.onChange}
        />
        {this.state.gameOver && <GameOver userPoints={this.state.userPoints} />}

        <Timer secondsRemaining={this.state.secondsRemaining} />
      </React.Fragment>
    );
  }
}

export default Main;
