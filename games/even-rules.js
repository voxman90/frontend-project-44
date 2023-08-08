import * as math from '../src/math.js';

const MESSAGES = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
};

const generateQuestion = () => math.getRandomInteger();

const stringifyQuestion = (num) => `${num}`;

const getAnswer = (num) => (math.isEven(num) ? 'yes' : 'no');

const evenRules = {
  MESSAGES,
  generateQuestion,
  stringifyQuestion,
  getAnswer,
};

export default evenRules;
