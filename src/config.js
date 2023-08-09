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

  // primal-rules.js
  PRIMAL_NUMBERS_RANGE: [2, 97],
  PRIMAL_NUMBERS: [
    2, 3, 5, 7, 11,
    13, 17, 19, 23,
    29, 31, 37, 41,
    43, 47, 53, 59,
    61, 67, 71, 73,
    79, 83, 89, 97,
  ],
  NON_PRIMAL_NUMBERS: [
    1, 4, 6, 8, 9, 10, 12, 14, 15, 16,
    18, 20, 21, 22, 24, 25, 26, 27, 28,
    30, 32, 33, 34, 35, 36, 38, 39, 40,
    42, 44, 45, 46, 48, 49, 50, 51, 52,
    54, 55, 56, 57, 58, 60, 62, 63, 64,
    65, 66, 68, 69, 70, 72, 74, 75, 76,
    77, 78, 80, 81, 82, 84, 85, 86, 87,
    88, 90, 91, 92, 93, 94, 95, 96, 98,
    99, 100,
  ],
};

export default config;
