import readlineSync from 'readline-sync';

const MESSAGES = {
  intro: 'Welcome to the Brain Games!',
  askUserName: 'May I have your name? ',
  greetings: (userName) => `Hello, ${userName}!`,
  answer: 'Your answer: ',
  question: (details) => `Question: ${details}`,
  correctAnswer: 'Correct!',
  wrongAnswer: (userAnsw, correctAnsw) => (
    `'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`
  ),
  userLoses: (userName) => `Let's try again, ${userName}!`,
  userWins: (userName) => `Congratulations, ${userName}!`,
};
const QUESTIONS_PER_GAME = 3;

const gameSession = (gameQuestion, gameRules) => {
  console.log(gameQuestion);

  let isGameOver = false;
  let isUserLoses = false;
  let answerCount = 0;

  do {
    const { question, answer: correctAnswer } = gameRules.generateQuestionAnswerPair();

    console.log(MESSAGES.question(question));
    const userAnswer = readlineSync.question(MESSAGES.answer);
    const isUserAnswerCorrect = correctAnswer === userAnswer;

    if (isUserAnswerCorrect) {
      console.log(MESSAGES.correctAnswer);
      answerCount += 1;
    } else {
      console.log(MESSAGES.wrongAnswer(userAnswer, correctAnswer));
      isUserLoses = true;
    }

    isGameOver = !isUserLoses && answerCount < QUESTIONS_PER_GAME;
  } while (isGameOver);

  return isUserLoses;
};

const gameEngine = (gameQuestion = '', gameRules = null) => {
  console.log(MESSAGES.intro);
  const userName = readlineSync.question(MESSAGES.askUserName);
  console.log(MESSAGES.greetings(userName));

  if (gameRules === null) {
    return;
  }

  const isUserLoses = gameSession(gameQuestion, gameRules);

  const conclusion = (isUserLoses) ? MESSAGES.userLoses : MESSAGES.userWins;
  console.log(conclusion(userName));
};

export default gameEngine;
