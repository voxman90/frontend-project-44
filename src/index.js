import readlineSync from 'readline-sync';

const QUESTIONS_PER_GAME = 3;

const gameSession = (gameQuestion, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameQuestion);

  for (let answerCount = 0; answerCount < QUESTIONS_PER_GAME; answerCount += 1) {
    const { question, answer: correctAnswer } = gameRules.generateQuestionAnswerPair();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameSession;
