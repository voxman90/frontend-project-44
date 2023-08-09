import math from '../src/math.js';

const MESSAGES = {
  rules: 'Find the greatest common divisor of given numbers.',
};

const RANDOM_INTEGER_RANGE = [1, 101];

const generateQuestion = () => ({
  a: math.getRandomInteger(RANDOM_INTEGER_RANGE),
  b: math.getRandomInteger(RANDOM_INTEGER_RANGE),
});

const stringifyQuestion = ({ a, b }) => `${a} ${b}`;

const getAnswer = ({ a, b }) => `${math.gcd(a, b)}`;

const gcdRules = {
  MESSAGES,
  generateQuestion,
  stringifyQuestion,
  getAnswer,
};

export default gcdRules;
