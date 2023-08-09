import config from '../src/config.js';
import math from '../src/math.js';

const {
  OPERAND_RANGE,
  OPERATIONS,
} = config;

const RULE = 'What is the result of the expression?';

const OPERATION_MIN_INDEX = 0;
const OPERATION_MAX_INDEX = OPERATIONS.length - 1;

const getRandomOperation = () => {
  const index = math.getRandomInteger([OPERATION_MIN_INDEX, OPERATION_MAX_INDEX]);
  return OPERATIONS[index];
};

const generateOperation = () => ({
  a: math.getRandomInteger(OPERAND_RANGE),
  b: math.getRandomInteger(OPERAND_RANGE),
  operation: getRandomOperation(),
});

const stringifyOperation = ({ a, b, op }) => `${a} ${op} ${b}`;

const applyOperation = ({ a, b, op }) => {
  switch (op) {
    case '+': {
      return a + b;
    }
    case '-': {
      return a - b;
    }
    case '*': {
      return a * b;
    }
    default:
      return null;
  }
};

const calcRules = {
  RULE,
  generateQuestion: generateOperation,
  stringifyQuestion: stringifyOperation,
  getAnswer: applyOperation,
};

export default calcRules;
export { generateOperation, stringifyOperation, applyOperation };
