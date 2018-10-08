import React from "react";
import questionChooser from "./QuestionList.js";
import Timer from "./Timer.js";
import Header from "./Header.js";
import AnswerBox from "./AnswerBox.js";
import Question from "./Question.js";
import GameOver from "./GameOver.js";
import PlayerPoints from "./PlayerPoints.js";
import QuestionsRemaining from "./QuestionsRemaining.js";

class Main extends React.Component {
  gameLength = 10;
  secondsAmount = 10;
  state = {
    question: "",
    answer: "",
    userAnswer: "",
    showCorrectMessage: false,
    userPoints: 0,
    secondsRemaining: this.secondsAmount,
    gameOver: false,
    questionsRemaining: this.gameLength
  };

  componentDidMount() {
    this.prepare();
  }

  componentDidUpdate() {
    if (this.state.secondsRemaining <= 0 && !this.state.gameOver) {
      this.stopTimer();
      this.prepare();
    }
  }

  prepare = () => {
    if (this.state.questionsRemaining) {
      let { question, answer } = questionChooser();
      this.setState(
        prevState => ({
          question,
          answer,
          userAnswer: "",
          showCorrectMessage: false,
          questionsRemaining: prevState.questionsRemaining - 1,
          secondsRemaining: this.secondsAmount
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
      secondsRemaining: this.secondsAmount
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
        <div>
          <div className="left">
            <Header />
            <Question
              question={this.state.question}
              showCorrectMessage={this.state.showCorrectMessage}
              gameOver={this.state.gameOver}
            />
            <br />
            <AnswerBox
              userAnswer={this.state.userAnswer}
              onChange={this.onChange}
            />
            {this.state.gameOver && (
              <GameOver userPoints={this.state.userPoints} />
            )}
          </div>
          <div className="right">
            <Timer secondsRemaining={this.state.secondsRemaining} />
            <PlayerPoints userPoints={this.state.userPoints} />
            <QuestionsRemaining
              questionsRemaining={this.state.questionsRemaining}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
