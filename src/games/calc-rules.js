import utils from '../utils.js';

const OPERATIONS = ['+', '-', '*'];
const OPERAND_RANGE = [1, 20];
const OPERATION_MIN_INDEX = 0;
const OPERATION_MAX_INDEX = OPERATIONS.length - 1;

const getRandomOperation = () => {
  const index = utils.getRandomInteger([OPERATION_MIN_INDEX, OPERATION_MAX_INDEX]);
  return OPERATIONS[index];
};

const generateOperation = () => ({
  a: utils.getRandomInteger(OPERAND_RANGE),
  b: utils.getRandomInteger(OPERAND_RANGE),
  op: getRandomOperation(),
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

const generateQuestionAnswerPair = () => {
  const operation = generateOperation();
  const result = applyOperation(operation);

  return {
    question: stringifyOperation(operation),
    answer: `${result}`,
  };
};

export default { generateQuestionAnswerPair };
export {
  stringifyOperation,
  applyOperation,
  OPERATIONS,
};
