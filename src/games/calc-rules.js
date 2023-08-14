import { getRandomInteger } from '../utils.js';

const OPERATIONS = ['+', '-', '*'];
const OPERAND_RANGE = [1, 20];
const OPERATION_MIN_INDEX = 0;
const OPERATION_MAX_INDEX = OPERATIONS.length - 1;

const applyArithmeticOperation = ({ arithmeticOperation, operandA, operandB }) => {
  switch (arithmeticOperation) {
    case '+': {
      return operandA + operandB;
    }
    case '-': {
      return operandA - operandB;
    }
    case '*': {
      return operandA * operandB;
    }
    default:
      return null;
  }
};

const generateQuestionAnswerPair = () => {
  const operandA = getRandomInteger(OPERAND_RANGE);
  const operandB = getRandomInteger(OPERAND_RANGE);
  const operationIndex = getRandomInteger([OPERATION_MIN_INDEX, OPERATION_MAX_INDEX]);
  const arithmeticOperation = OPERATIONS[operationIndex];
  const result = applyArithmeticOperation({ arithmeticOperation, operandA, operandB });

  return {
    question: `${operandA} ${arithmeticOperation} ${operandB}`,
    answer: `${result}`,
  };
};

export default { generateQuestionAnswerPair };
