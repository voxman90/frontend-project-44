import math from '../src/math.js';

const MESSAGES = {
  rules: 'What is the result of the expression?',
};

const MIN_INEGER = 0;
const MAX_INEGER = 20;
const OPERAND_RANGE = [MIN_INEGER, MAX_INEGER];
const OPERATION_MIN_INDEX = 0;
const OPERATION_MAX_INDEX = 2;
const OPERATIONS = ['+', '-', '*'];

const getRandomOperation = () => {
  const index = math.getRandomInteger([OPERATION_MIN_INDEX, OPERATION_MAX_INDEX + 1]);
  return OPERATIONS[index];
};

const generateQuestion = () => ({
  a: math.getRandomInteger(OPERAND_RANGE),
  b: math.getRandomInteger(OPERAND_RANGE),
  operation: getRandomOperation(),
});

const stringifyQuestion = ({ a, b, operation }) => `${a} ${operation} ${b}`;

const getAnswer = ({ a, b, operation }) => {
  switch (operation) {
    case '+': {
      return `${a + b}`;
    }
    case '-': {
      return `${a - b}`;
    }
    case '*': {
      return `${a * b}`;
    }
    default:
      return null;
  }
};

const calcRules = {
  MESSAGES,
  generateQuestion,
  stringifyQuestion,
  getAnswer,
};

export default calcRules;
