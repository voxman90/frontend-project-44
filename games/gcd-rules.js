import config from '../src/config.js';
import math from '../src/math.js';

const { RANDOM_INT_RANGE } = config;

const RULE = 'Find the greatest common divisor of given numbers.';

const generatePair = () => ({
  a: math.getRandomInteger(RANDOM_INT_RANGE),
  b: math.getRandomInteger(RANDOM_INT_RANGE),
});

const stringifyPair = ({ a, b }) => `${a} ${b}`;

const getGCD = ({ a, b }) => math.gcd(a, b);

const gcdRules = {
  RULE,
  generateQuestion: generatePair,
  stringifyQuestion: stringifyPair,
  getAnswer: getGCD,
};

export default gcdRules;
export { generatePair, stringifyPair, getGCD };
