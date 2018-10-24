const questions = [
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
    question: "What is Star-Lord's real name?",
    answer: "Peter Quill"
  },
  {
    question: "What is Ant-Man's real name?",
    answer: "Scott Lang"
  },
  {
    question: "What is Doctor Strange's first name?",
    answer: "Steven"
  },
  {
    question: "What is the Black Panther's real name?",
    answer: "T'Challa"
  },
  {
    question: "What is War Machine's real name?",
    answer: "James Rhodes"
  },
  {
    question: "What is Falcon's real name?",
    answer: "Sam Wilson"
  },
  {
    question: "What is Scarlet Witch's real name?",
    answer: "Wanda Maximoff"
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
  },
  {
    question: "What city does Tony Stark live in?",
    answer: "Malibu"
  },
  {
    question:
      "What country did Bruce Banner hide out in at the beginning of The Avengers?",
    answer: "India"
  },
  {
    question:
      "What country did Bruce Banner hide out in in The Incredible Hulk?",
    answer: "Brazil"
  },
  {
    question: "What country was the Grand Prix that Tony Stark raced in?",
    answer: "Monaco"
  },
  {
    question: "What is Thor's father's name?",
    answer: "Odin"
  },
  {
    question: "What is Thor's grandfather's name?",
    answer: "Bor"
  },
  {
    question: "What is Thor's brother's name?",
    answer: "Loki"
  },
  {
    question: "What is Thor's sister's name?",
    answer: "Hela"
  },
  {
    question: "What planet is Thor from?",
    answer: "Asgard"
  },
  {
    question: "What is Iron Man's FIRST AI's name?",
    answer: "Jarvis"
  },
  {
    question: "What is Iron Man's CURRENT AI's name?",
    answer: "Friday"
  },
  {
    question: "What state was Thor banished to?",
    answer: "New Mexico"
  },
  {
    question: "Who made Captain America's shield?",
    answer: "Howard Stark"
  },
  {
    question: "What is Iron Man's nickname for Thor?",
    answer: "Point Break"
  },
  {
    question: "What is Lt. Col. Rhodes call sign?",
    answer: "War Machine"
  },
  {
    question: "What city was the final battle of Thor: The Dark World in?",
    answer: "London"
  },
  {
    question: "What planet is the capital of the Nova Empire?",
    answer: "Xandar"
  },
  {
    question: "What country is the source of Vibranium?",
    answer: "Wakanda"
  },
  {
    question: "What city does Ant Man live in?",
    answer: "San Francisco"
  },
  {
    question: "What city was the Civil War airport battle in?",
    answer: "Leipzig"
  },
  {
    question: "What species is Rocket?",
    answer: "Racoon"
  },
  {
    question: "What is Spider-Man's AI's name?",
    answer: "Karen"
  },
  {
    question: "What country did Thor and Loki find their dad in?",
    answer: "Norway"
  },
  {
    question: "What shape is the herb that gives the Black Panther his power?",
    answer: "Heart"
  },
  {
    question: "What body part did Rocket give to Thor?",
    answer: "Eye"
  },
  {
    question: "What is Falcon's drone's name?",
    answer: "Redwing"
  }
];

const questionChooser = () => {
  return questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
};

export default questionChooser;
