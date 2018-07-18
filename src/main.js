import React from "react";
import q from "./q.js";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theArray: [],
      theQuestion: "Who is Iron Man",
      theAnswer: "Tony Stark",
      userAnswer: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      theArray: q.array
    });
    // this.prepare;
  }

  //   prepare() {
  //     this.setState({ theAnswer: });
  //   }

  onChange(e) {
    this.setState({ userAnswer: e.target.value });
    console.log(this.state.userAnswer);
    this.compareAnswer();
  }

  compareAnswer() {
    if (this.state.userAnswer === this.state.theAnswer) {
      console.log("You are correct!");
    }
  }

  onSubmit() {}

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to my Marvel Trivia App!</h1>
        <h3>Answer quickly to win points!</h3>
        <div>
          <div className="question">
            <label htmlFor="question">Question</label>
            <input
              className="question"
              type="text"
              value={this.state.theQuestion}
              onChange={this.onChange}
              disabled
            />
          </div>
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
      </React.Fragment>
    );
  }
}

export default Main;
