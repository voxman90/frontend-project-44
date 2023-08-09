import readlineSync from 'readline-sync';

import config from './config.js';

const {
  MESSAGES,
  QUESTIONS_PER_GAME,
} = config;

const gameSession = (gameRules) => {
  // display the game rule
  console.log(gameRules.RULE);

  let isGameOver = false;
  let isUserLoses = false;
  let answerCount = 0;

  do {
    /*
      Get the game-specific form of the question content,
      its string representation and the correct answer (string)
    */
    const question = gameRules.generateQuestion();
    const questionDetails = gameRules.stringifyQuestion(question);
    const correctAnswer = `${gameRules.getAnswer(question)}`;

    // Get the user's answer to the question and check it
    console.log(MESSAGES.question(questionDetails));
    const userAnswer = readlineSync.question(MESSAGES.answer);
    const isUserAnswerCorrect = correctAnswer === userAnswer;

    if (isUserAnswerCorrect) {
      console.log(MESSAGES.correctAnsw);
      answerCount += 1;
    } else {
      console.log(MESSAGES.wrongAnsw(userAnswer, correctAnswer));
      isUserLoses = true;
    }

    isGameOver = !isUserLoses && answerCount < QUESTIONS_PER_GAME;
  } while (isGameOver);

  return isUserLoses;
};

const gameEngine = (gameRules = null) => {
  // Display the intro, get the user's name and greet the user
  console.log(MESSAGES.intro);
  const userName = readlineSync.question(MESSAGES.askUserName);
  console.log(MESSAGES.greetings(userName));

  // If the rules of the game aren't set, the program is terminated
  if (gameRules === null) {
    return;
  }

  // Getting the result of the game session (according to the gameRules)
  const isUserLoses = gameSession(gameRules);

  const conclusion = (isUserLoses) ? MESSAGES.userLoses : MESSAGES.userWins;
  console.log(conclusion(userName));
};

export default gameEngine;
