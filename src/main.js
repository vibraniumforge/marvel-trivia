import React from "react";
import ReactDom from "react-dom";
// import Questions from "./questions.js";
import Timer from "./timer.js";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theArray: [
        {
          question: "Who is Iron Man?",
          answer: "Tony Stark"
        },
        {
          question: "Who is Captain America?",
          answer: "Steve Rogers"
        },
        {
          question: "Who is The Hulk?",
          answer: "Bruce Banner"
        },
        {
          question: "Who is Spider-Man?",
          answer: "Peter Parker"
        }
      ],
      theChoice: "a",
      theQuestion: "",
      theAnswer: "",
      userAnswer: ""
    };

    this.onChange = this.onChange.bind(this);
    this.prepare = this.prepare.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   theArray: q.array
    // });
    this.prepare();
  }

  prepare() {
    this.setState({
      // location1: Math.floor(Math.random() * this.state.theArray.length),
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
    this.compareAnswer();
  }

  compareAnswer() {
    if (
      this.state.userAnswer.toLocaleLowerCase().trim() ===
        this.state.theChoice[0].answer.toLocaleLowerCase().trim() &&
      this.state.theChoice[0].answer !== ""
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
    console.log(
      "this.state.theChoice[0].question=",
      this.state.theChoice[0].question
    );
    console.log(
      "this.state.theChoice[0].answer=",
      this.state.theChoice[0].answer
    );
    console.log("theQuestion=", this.state.theQuestion);
    console.log("theAnswer=", this.state.theAnswer);
    console.log("userAnswer=", this.state.userAnswer);
    console.log("========");

    return (
      <React.Fragment>
        <h1>Welcome to my Marvel Trivia App!</h1>
        <h3>Answer quickly to win points!</h3>
        <div>
          <div className="question">
            <label htmlFor="question">Question:</label>
            {/* <input
              className="question"
              type="text"
              value={this.state.theQuestion}
              onChange={this.onChange}
              disabled
            /> */}
            <p>{this.state.theChoice[0].question}</p>
          </div>
          <div id="correctResponse" className="white">
            <p>You are correct!</p>
          </div>
          <div id="theDomAnswer" className="white">
            <p> {this.state.theChoice[0].answer}</p>
          </div>
          <br />
          <div className="answer">
            <label htmlFor="question">Answer</label>
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
