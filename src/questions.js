import React from "react";

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quesions: [
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
          question: "What color does The Hulk turn?",
          answer: "Green"
        }
      ]
    };
  }

  render() {
    return this.state.quesions;
  }
}

export default Questions;
