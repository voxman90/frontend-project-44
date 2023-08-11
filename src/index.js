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

  for (let answerCount = 0; answerCount < QUESTIONS_PER_GAME; answerCount += 1) {
    const { question, answer: correctAnswer } = gameRules.generateQuestionAnswerPair();

    console.log(MESSAGES.question(question));
    const userAnswer = readlineSync.question(MESSAGES.answer);
    const isUserAnswerCorrect = correctAnswer === userAnswer;

    if (isUserAnswerCorrect) {
      console.log(MESSAGES.correctAnswer);
    } else {
      console.log(MESSAGES.wrongAnswer(userAnswer, correctAnswer));
      return false;
    }
  }

  return true;
};

const gameEngine = (gameQuestion = '', gameRules = null) => {
  console.log(MESSAGES.intro);
  const userName = readlineSync.question(MESSAGES.askUserName);
  console.log(MESSAGES.greetings(userName));

  if (gameRules === null) {
    return;
  }

  const isUserWins = gameSession(gameQuestion, gameRules);

  const conclusion = (isUserWins) ? MESSAGES.userWins : MESSAGES.userLoses;
  console.log(conclusion(userName));
};

export default gameEngine;
