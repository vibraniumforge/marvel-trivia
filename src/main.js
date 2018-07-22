import React from "react";
import Questions from "./questions.js";
import Timer from "./timer.js";
import Marvel from "./marvel.png";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theArray: [
        {
          question: "What is Iron Man's real name?",
          answer: "Tony Stark"
        },
        {
          question: "What is Captain America's real name?",
          answer: "Steve Rogers"
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
          question: "What color does The Hulk turn?",
          answer: "Green"
        }
      ],
      theChoice: "2",
      theQuestion: "",
      theAnswer: "",
      userAnswer: ""
    };

    this.onChange = this.onChange.bind(this);
    // this.prepare = this.prepare.bind(this);
    // this.parser = this.parser.bind(this);
    // this.compareAnswer = this.compareAnswer.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   theArray: q.array
    // });
    this.prepare();
  }

  prepare() {
    this.setState({
      theChoice: this.state.theArray.splice(
        Math.floor(Math.random() * this.state.theArray.length),
        1
      )
    });
    document.querySelector("#correctResponse").classList.add("white");
    document.querySelector("#correctResponse").classList.remove("green");
    this.parser();
  }

  parser() {
    this.setState({
      theQuestion: this.state.theChoice[0].question,
      theAnswer: this.state.theChoice[0].answer
    });
  }

  onChange(e) {
    this.setState({ userAnswer: e.target.value });
    if (this.state.userAnswer !== "") {
      this.compareAnswer();
    }
  }

  compareAnswer() {
    if (
      this.state.theChoice !== "2" &&
      // this.state.theQuestion &&
      this.state.userAnswer.toLowerCase().trim() ===
        this.state.theChoice[0].answer.toLowerCase().trim()
    ) {
      console.log("You are correct!");
      document.querySelector("#correctResponse").classList.remove("white");
      document.querySelector("#correctResponse").classList.add("green");
      setTimeout(
        function() {
          this.prepare();
        }.bind(this),
        1000
      );
      this.setState({ userAnswer: "" });
    } else {
      console.log("no");
    }
  }

  render() {
    console.log("state.theArray=", this.state.theArray);
    console.log("theArray.length=", this.state.theArray.length);
    console.log("theChoice=", this.state.theChoice);
    if (this.state.theChoice[0]) {
      console.log(
        "this.state.theChoice[0].question=",
        this.state.theChoice[0].question
      );
      console.log(
        "this.state.theChoice[0].answer=",
        this.state.theChoice[0].answer
      );
    }
    console.log("theQuestion=", this.state.theQuestion);
    console.log("theAnswer=", this.state.theAnswer);
    console.log("userAnswer=", this.state.userAnswer);
    console.log("========");

    return (
      <React.Fragment>
        <h1>Welcome to my Marvel Trivia App!</h1>
        <img src={Marvel} alt={"Marvel Logo"} />
        <h3>Answer quickly to win points!</h3>
        <div>
          <div className="question">
            <label htmlFor="question">Question:</label>
            <p>{this.state.theChoice[0].question}</p>
          </div>
          <div id="correctResponse" className="white">
            <h1>You are correct!</h1>
          </div>
          <div id="theDomAnswer" className="white">
            <p> {this.state.theChoice[0].answer}</p>
          </div>
          <br />
          <div className="answer">
            <label htmlFor="question">Answer: </label>
            <input
              className="answer"
              type="text"
              value={this.state.userAnswer}
              onChange={this.onChange}
              placeholder="Your answer"
            />
          </div>
        </div>
        <Timer />
      </React.Fragment>
    );
  }
}

export default Main;
