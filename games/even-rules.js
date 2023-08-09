import config from '../src/config.js';
import math from '../src/math.js';

const { RANDOM_INT_RANGE } = config;

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRandomInt = () => math.getRandomInteger(RANDOM_INT_RANGE);

const stringifyInt = (num) => `${num}`;

const getAnswer = (num) => (math.isEven(num) ? 'yes' : 'no');

const evenRules = {
  RULE,
  generateQuestion: generateRandomInt,
  stringifyQuestion: stringifyInt,
  getAnswer,
};

export default evenRules;
export { generateRandomInt, stringifyInt, getAnswer };
