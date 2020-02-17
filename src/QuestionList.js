const questions = [
  {
    question: "What is Captain America's real name?",
    correctAnswer: "Steve Rogers"
  },
  {
    question: "What is Iron Man's real name?",
    correctAnswer: "Tony Stark"
  },
  {
    question: "What is The Hulk's real name?",
    correctAnswer: "Bruce Banner"
  },
  {
    question: "What is Thor's last name?",
    correctAnswer: "Odinson"
  },
  {
    question: "What is Hawkeye's real name?",
    correctAnswer: "Clint Barton"
  },
  {
    question: "What is Black Widow's real name?",
    correctAnswer: "Natasha Romanoff"
  },
  {
    question: "What is Star-Lord's real name?",
    correctAnswer: "Peter Quill"
  },
  {
    question: "What is Ant-Man's real name?",
    correctAnswer: "Scott Lang"
  },
  {
    question: "What is Doctor Strange's first name?",
    correctAnswer: "Steven"
  },
  {
    question: "What is the Black Panther's real name?",
    correctAnswer: "T'Challa"
  },
  {
    question: "What is War Machine's real name?",
    correctAnswer: "James Rhodes"
  },
  {
    question: "What is Falcon's real name?",
    correctAnswer: "Sam Wilson"
  },
  {
    question: "What is Scarlet Witch's real name?",
    correctAnswer: "Wanda Maximoff"
  },
  {
    question: "What is Spider-Man's real name?",
    correctAnswer: "Peter Parker"
  },
  {
    question: "What color is the Tesseract?",
    correctAnswer: "Blue"
  },
  {
    question: "What color is the Aether?",
    correctAnswer: "Red"
  },
  {
    question: "What color is the Eye of Agamotto?",
    correctAnswer: "Green"
  },
  {
    question: "What color is the Space Stone?",
    correctAnswer: "Blue"
  },
  {
    question: "What color is the Mind Stone?",
    correctAnswer: "Yellow"
  },
  {
    question: "What color is the Reality Stone?",
    correctAnswer: "Red"
  },
  {
    question: "What color is the Power Stone?",
    correctAnswer: "Purple"
  },
  {
    question: "What color is Time Stone?",
    correctAnswer: "Green"
  },
  {
    question: "What color is the Soul Stone?",
    correctAnswer: "Orange"
  },
  {
    question: "What metal is Captain America's shield made of?",
    correctAnswer: "Vibranium"
  },
  {
    question: "What powers Iron Man's suits?",
    correctAnswer: "Arc Reactor"
  },
  {
    question: "What is Thor's hammer called?",
    correctAnswer: "Mjolnir"
  },
  {
    question: "What color does The Hulk turn when angry?",
    correctAnswer: "Green"
  },
  {
    question: "What city does Tony Stark live in?",
    correctAnswer: "Malibu"
  },
  {
    question:
      "What country did Bruce Banner hide out in at the beginning of The Avengers?",
    correctAnswer: "India"
  },
  {
    question:
      "What country did Bruce Banner hide out in in The Incredible Hulk?",
    correctAnswer: "Brazil"
  },
  {
    question: "What country was the Grand Prix that Tony Stark raced in?",
    correctAnswer: "Monaco"
  },
  {
    question: "What is Thor's father's name?",
    correctAnswer: "Odin"
  },
  {
    question: "What is Thor's grandfather's name?",
    correctAnswer: "Bor"
  },
  {
    question: "What is Thor's brother's name?",
    correctAnswer: "Loki"
  },
  {
    question: "What is Thor's sister's name?",
    correctAnswer: "Hela"
  },
  {
    question: "What planet is Thor from?",
    correctAnswer: "Asgard"
  },
  {
    question: "What is Iron Man's FIRST AI's name?",
    correctAnswer: "Jarvis"
  },
  {
    question: "What is Iron Man's CURRENT AI's name?",
    correctAnswer: "Friday"
  },
  {
    question: "What state was Thor banished to?",
    correctAnswer: "New Mexico"
  },
  {
    question: "Who made Captain America's shield?",
    correctAnswer: "Howard Stark"
  },
  {
    question: "What is Iron Man's nickname for Thor?",
    correctAnswer: "Point Break"
  },
  {
    question: "What is Lt. Col. Rhodes call sign?",
    correctAnswer: "War Machine"
  },
  {
    question: "What city was the final battle of Thor: The Dark World in?",
    correctAnswer: "London"
  },
  {
    question: "What planet is the capital of the Nova Empire?",
    correctAnswer: "Xandar"
  },
  {
    question: "What country is the source of Vibranium?",
    correctAnswer: "Wakanda"
  },
  {
    question: "What city does Ant Man live in?",
    correctAnswer: "San Francisco"
  },
  {
    question: "What city was the Civil War airport battle in?",
    correctAnswer: "Leipzig"
  },
  {
    question: "What species is Rocket?",
    correctAnswer: "Racoon"
  },
  {
    question: "What is Spider-Man's AI's name?",
    correctAnswer: "Karen"
  },
  {
    question: "What country did Thor and Loki find their dad in?",
    correctAnswer: "Norway"
  },
  {
    question: "What shape is the herb that gives the Black Panther his power?",
    correctAnswer: "Heart"
  },
  {
    question: "What body part did Rocket give to Thor?",
    correctAnswer: "Eye"
  },
  {
    question: "What is Falcon's drone's name?",
    correctAnswer: "Redwing"
  },
  {
    question: "What city did Spider-Man fight the water monster in?",
    correctAnswer: "Venice"
  }
];

const questionChooser = () => {
  return questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
};

export default questionChooser;
