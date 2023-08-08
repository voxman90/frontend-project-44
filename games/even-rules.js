import * as math from '../src/math.js';

const MESSAGES = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
};

const RANDOM_INTEGER_RANGE = [0, 101];

const generateQuestion = () => math.getRandomInteger(RANDOM_INTEGER_RANGE);

const stringifyQuestion = (num) => `${num}`;

const getAnswer = (num) => (math.isEven(num) ? 'yes' : 'no');

const evenRules = {
  MESSAGES,
  generateQuestion,
  stringifyQuestion,
  getAnswer,
};

export default evenRules;
