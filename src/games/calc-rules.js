import { getRandomInteger } from '../utils.js';

const OPERATIONS = ['+', '-', '*'];
const OPERAND_RANGE = [1, 20];

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
    default: {
      throw new Error(`Invalid value of arithmeticOperation: ${arithmeticOperation}`);
    }
  }
};

const generateQuestionAnswerPair = () => {
  const operandA = getRandomInteger(OPERAND_RANGE);
  const operandB = getRandomInteger(OPERAND_RANGE);
  const operationIndex = getRandomInteger([0, OPERATIONS.length - 1]);

  const arithmeticOperation = OPERATIONS[operationIndex];
  const operationResult = applyArithmeticOperation({
    arithmeticOperation,
    operandA,
    operandB,
  });

  const question = `${operandA} ${arithmeticOperation} ${operandB}`;
  const answer = operationResult.toString();

  return [question, answer];
};

export default { generateQuestionAnswerPair };
