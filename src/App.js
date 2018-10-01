import React from "react";
// import Questions from "./questions.js";
import Timer from "./timer.js";
import Marvel from "./images/marvel.png";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theArray: [
        {
          question: "What is Captain America's real name?",
          answer: "Steve Rogers"
        },
        {
          question: "What is Iron Man's real name?",
          answer: "Tony Stark"
        },
        {
          question: "What is The Hulk's real name?",
          answer: "Bruce Banner"
        },
        {
          question: "What is Thor's last name?",
          answer: "Odinson"
        },
        {
          question: "What is Hawkeye's real name?",
          answer: "Clint Barton"
        },
        {
          question: "What is Black Widow's real name?",
          answer: "Natasha Romanoff"
        },
        {
          question: "What is Spider-Man's real name?",
          answer: "Peter Parker"
        },
        {
          question: "What color is the Tesseract?",
          answer: "Blue"
        },
        {
          question: "What color is the Aether?",
          answer: "Red"
        },
        {
          question: "What color is the Eye of Agamotto?",
          answer: "Green"
        },
        {
          question: "What color is the Space Stone?",
          answer: "Blue"
        },
        {
          question: "What color is the Mind Stone?",
          answer: "Yellow"
        },
        {
          question: "What color is the Reality Stone?",
          answer: "Red"
        },
        {
          question: "What color is the Power Stone?",
          answer: "Purple"
        },
        {
          question: "What color is Time Stone?",
          answer: "Green"
        },
        {
          question: "What color is the Soul Stone?",
          answer: "Orange"
        },
        {
          question: "What metal is Captain America's shield made of?",
          answer: "Vibranium"
        },
        {
          question: "What powers Iron Man's suits?",
          answer: "Arc Reactor"
        },
        {
          question: "What is Thor's hammer called?",
          answer: "Mjolnir"
        },
        {
          question: "What color does The Hulk turn when angry?",
          answer: "Green"
        }
      ],
      theChoice: "",
      theQuestion: "",
      theAnswer: "",
      userAnswer: "",
      showCorrectMessage: false,
      userPoints: 0,
      secondsRemaining: 15,
      gameOver: false,
      gameLength: 10,
      startTime: ""
    };

    this.onChange = this.onChange.bind(this);
    this.prepare = this.prepare.bind(this);
    this.parser = this.parser.bind(this);
    this.compareAnswer = this.compareAnswer.bind(this);
    this.showCorrectMessage = this.showCorrectMessage.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentWillMount() {
    this.prepare();
  }

  prepare() {
    if (this.state.theArray.length && this.state.gameLength) {
      this.setState(
        {
          theChoice: this.state.theArray.splice(
            Math.floor(Math.random() * this.state.theArray.length),
            1
          ),
          userAnswer: "",
          showCorrectMessage: false,
          gameLength: this.state.gameLength - 1
        },
        this.parser
      );
    } else {
      this.setState({ gameOver: true });
    }
  }

  parser() {
    this.setState(
      {
        theQuestion: this.state.theChoice[0].question,
        theAnswer: this.state.theChoice[0].answer
      },
      this.startTimer
    );
  }

  onChange(e) {
    this.setState({ userAnswer: e.target.value }, this.compareAnswer);
  }

  compareAnswer() {
    if (
      this.state.userAnswer !== "" &&
      this.state.userAnswer.toLowerCase().trim() ===
        this.state.theChoice[0].answer.toLowerCase().trim()
    ) {
      this.showCorrectMessage();
    }
  }

  showCorrectMessage = () => {
    this.setState({
      showCorrectMessage: true,
      userPoints: this.state.userPoints + this.state.secondsRemaining
    });
    setTimeout(
      function() {
        this.prepare();
      }.bind(this),
      1000
    );
    this.stopTimer();
    clearInterval(this.timer);
    this.setState({ secondsRemaining: 15 });
    // this.startTimer();
  };

  startTimer() {
    console.log("startTimer fires");
    // this.setState({
    //   time: this.state.time,
    //   startTime: Date.now()
    // });
    this.timer = setInterval(
      () =>
        this.setState({ secondsRemaining: this.state.secondsRemaining - 1 }),
      1000
    );
    if (this.state.secondsRemaining < 0) {
      this.prepare();
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    console.log("stopTimer fires");
  }

  render() {
    console.log("this.state.userPoints=", this.state.userPoints);
    console.log("this.state.secondsRemaining=", this.state.secondsRemaining);

    return (
      <React.Fragment>
        <h1>
          Welcome to my <img src={Marvel} alt={"Marvel Logo"} /> Trivia App!
        </h1>
        <h3>Answer quickly to win points!</h3>
        <hr />
        <div>
          <div className="question">
            <label htmlFor="question">
              Question: {this.state.theChoice[0].question}
            </label>
          </div>
          <div
            id="correctResponse"
            className={this.state.showCorrectMessage ? "green" : "hidden"}
          >
            <h1>You are correct!</h1>
          </div>
          {/* <div id="theDomAnswer" className="white">
            {this.state.theChoice[0].answer}
          </div> */}
          <br />
          <div className="answer">
            <label htmlFor="question">Answer: </label>
            <input
              id="answerBox"
              className="answer"
              type="text"
              value={this.state.userAnswer}
              onChange={this.onChange}
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
