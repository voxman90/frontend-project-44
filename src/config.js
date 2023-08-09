const config = {
  // index.js, cli.js
  MESSAGES: {
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
  },
  QUESTIONS_PER_GAME: 3,

  // math.js
  DEFAULT_RANDOM_INT_RANGE: [1, Number.MAX_SAFE_INTEGER - 1],
  DEFAULT_PROG_BASE_RANGE: [1, 100],
  DEFAULT_PROG_INC_RANGE: [1, 10],
  DEFAULT_PROG_SIZE_RANGE: [5, 10],

  // progression-rules.js
  PROGRESSION_MIN_SIZE: 5,
  PROGRESSION_MAX_SIZE: 10,
  PROGRESSION_SKIP_MARK: '..',
  PROGRESSION_SEPARATOR: ' ',

  // gdc-rules.js, even-rules.js
  RANDOM_INT_RANGE: [0, 100],

  // calc-rules.js
  OPERAND_RANGE: [0, 20],
  OPERATIONS: ['+', '-', '*'],
};

export default config;
