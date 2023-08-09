import math from '../src/math.js';
import config from '../src/config.js';
import { generateRandomInt, stringifyInt } from './even-rules.js';

const { PRIMAL_NUMBERS_RANGE } = config;

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimal = (n) => math.isPrimal(n);

const primeRules = {
  RULE,
  generateQuestion: () => generateRandomInt(PRIMAL_NUMBERS_RANGE),
  stringifyQuestion: stringifyInt,
  getAnswer: isPrimal,
};

export default primeRules;
export { isPrimal };
