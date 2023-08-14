import { getRandomInteger } from '../utils.js';

const PRIME_NUMBERS_RANGE = [2, 97];

const isPrime = (integer) => {
  const isEven = integer % 2 === 0;
  const isNonPrimalEven = integer > 2 && isEven;
  const squareRoot = Math.sqrt(integer);
  const isSquare = integer % squareRoot === 0;
  if (
    integer === 1
    || isNonPrimalEven
    || isSquare
  ) {
    return false;
  }

  let checkedNumber = 3;
  const checkLimit = Math.floor(squareRoot);
  let hasNonTrivialDivisor = false;
  while (
    checkedNumber <= checkLimit
    && !hasNonTrivialDivisor
  ) {
    hasNonTrivialDivisor = integer % checkedNumber === 0;
    checkedNumber += 2;
  }

  return !hasNonTrivialDivisor;
};

const generateQuestionAnswerPair = () => {
  const integer = getRandomInteger(PRIME_NUMBERS_RANGE);

  return {
    question: `${integer}`,
    answer: isPrime(integer) ? 'yes' : 'no',
  };
};

export default { generateQuestionAnswerPair };
