import readlineSync from 'readline-sync';

const MESSAGES = {
  intro: 'Welcome to the Brain Games!',
  askUserName: 'May I have your name? ',
  greetings: (userName) => `Hello, ${userName}!`,
  answer: 'Your answer: ',
  question: (details) => `Question: ${details}`,
  correctAnsw: 'Correct!',
  wrongAnsw: (userAnsw, correctAnsw) => (
    `'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`
  ),
  userLoses: (userName) => `Let's try again, ${userName}!`,
  userWins: (userName) => `Congratulations, ${userName}!`,
};

const QUESTIONS_PER_GAME = 3;

const gameSession = (gameRules) => {
  console.log(gameRules.MESSAGES.rules);

  let isGameOver = false;
  let isUserLoses = false;
  let answerCount = 0;

  do {
    const question = gameRules.generateQuestion();
    const questionText = gameRules.stringifyQuestion(question);
    const correctAnswer = gameRules.getAnswer(question);

    console.log(MESSAGES.question(questionText));
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
  console.log(MESSAGES.intro);
  const userName = readlineSync.question(MESSAGES.askUserName);
  console.log(MESSAGES.greetings(userName));

  if (gameRules === null) {
    return;
  }

  const isUserLoses = gameSession(gameRules);

  const conclusion = (isUserLoses) ? MESSAGES.userLoses : MESSAGES.userWins;
  console.log(conclusion(userName));
};

export default gameEngine;
