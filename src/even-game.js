import readlineSync from 'readline-sync';

import * as math from './math.js';

const MESSAGES = {
  intro: 'Welcome to the Brain Games!',
  askUserName: 'May I have your name? ',
  greetings: (name) => `Hello, ${name}!`,
  evenGameRules: 'Answer "yes" if the number is even, otherwise answer "no".',
  isEven: (quest) => `Question: ${quest}`,
  answer: 'Your answer: ',
  correctAnsw: 'Correct!',
  wrongAnsw: (userAnsw, correctAnsw) => (
    `'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`
  ),
  userLoses: (name) => `Let's try again, ${name}!`,
  userWins: (name) => `Congratulations, ${name}!`,
};

const QUESTIONS_PER_GAME = 3;

const toYesOrNo = (bool) => (bool) ? 'yes' : 'no';

const toTrueOrFalse = (string) => {
  if (string === 'yes') {
    return true;
  }

  if (string === 'no') {
    return false;
  }

  return null;
};

const evenGame = () => {
  console.log(MESSAGES.intro);
  const userName = readlineSync.question(MESSAGES.askUserName);
  console.log(MESSAGES.evenGameRules);

  let isGameOver = false;
  let isUserLoses = false;
  let answerCount = 0;

  do  {
    const num = math.getRandomInteger();
    const isNumEven = math.isEven(num);
    const correctAnswer = toYesOrNo(isNumEven);

    console.log(MESSAGES.isEven(num));
    const userAnswer = readlineSync.question(MESSAGES.answer);
    const isUserAnswerCorrect = isNumEven === toTrueOrFalse(userAnswer);

    if (isUserAnswerCorrect) {
      console.log(MESSAGES.correctAnsw);
      answerCount += 1;
    } else {
      console.log(MESSAGES.wrongAnsw(userAnswer, correctAnswer));
      isUserLoses = true;
    }

    isGameOver = !isUserLoses && answerCount < QUESTIONS_PER_GAME;
  } while (isGameOver);

  const conclusion = (isUserLoses) ? MESSAGES.userLoses : MESSAGES.userWins;
  console.log(conclusion(userName));
};

export default evenGame;
