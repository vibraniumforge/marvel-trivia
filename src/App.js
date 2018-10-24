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
  gameQuestionsLength = 10;
  secondsAmount = 10;
  state = {
    question: "",
    answer: "",
    userAnswer: "",
    showCorrectMessage: false,
    userPoints: 0,
    secondsRemaining: this.secondsAmount,
    gameOver: false,
    questionsRemaining: this.gameQuestionsLength,
    showCorrectAnswer: false
  };

  componentDidUpdate() {
    if (
      this.state.secondsRemaining <= 0 &&
      !this.state.gameOver &&
      !this.state.showCorrectAnswer
    ) {
      this.showCorrectAnswer();
    }
  }

  prepare = () => {
    let { question, answer } = questionChooser();
    this.setState(
      prevState => ({
        question,
        answer,
        userAnswer: "",
        showCorrectMessage: false,
        questionsRemaining: prevState.questionsRemaining - 1,
        secondsRemaining: this.secondsAmount,
        showCorrectAnswer: false,
        gameOver: false,
        questionsRemaining: this.gameQuestionsLength,
        userPoints: 0
      }),
      this.startTimer
    );
  };

  reset = () => {
    if (this.state.questionsRemaining) {
      let { question, answer } = questionChooser();
      this.setState(
        prevState => ({
          question,
          answer,
          userAnswer: "",
          showCorrectMessage: false,
          questionsRemaining: prevState.questionsRemaining - 1,
          secondsRemaining: this.secondsAmount,
          showCorrectAnswer: false
        }),
        this.startTimer
      );
    } else {
      this.setState({ gameOver: true, userAnswer: "", secondsRemaining: 0 });
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
    setTimeout(this.reset, 1000);
    this.stopTimer();
    clearInterval(this.timer);
  };

  showCorrectAnswer = () => {
    this.stopTimer();
    this.setState({ showCorrectAnswer: true });
    setTimeout(this.reset, 1000);
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
              answer={this.state.answer}
              showCorrectAnswer={this.state.showCorrectAnswer}
            />
            <br />
            <AnswerBox
              userAnswer={this.state.userAnswer}
              onChange={this.onChange}
            />
            {this.state.gameOver && (
              <GameOver userPoints={this.state.userPoints} />
            )}
            <br />
            <button type="button" id="startBtn" onClick={this.prepare}>
              Start the Game
            </button>
          </div>
          <div className="right">
            <h3>Countdown Timer</h3>
            <Timer secondsRemaining={this.state.secondsRemaining} />
            <QuestionsRemaining
              questionsRemaining={this.state.questionsRemaining}
            />
            <PlayerPoints userPoints={this.state.userPoints} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
