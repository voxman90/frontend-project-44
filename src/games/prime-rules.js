import { getRandomInteger } from '../utils.js';

const PRIME_NUMBERS_RANGE = [2, 97];

const isPrime = (int) => {
  const isEven = int % 2 === 0;
  const isNonPrimalEven = int > 2 && isEven;
  const squareRoot = Math.sqrt(int);
  const isSquare = int % squareRoot === 0;
  if (
    int === 1
    || isNonPrimalEven
    || isSquare
  ) {
    return false;
  }

  let checkedNum = 3;
  const checkLimit = Math.floor(squareRoot) + 1;
  let hasNonTrivialDivisor = false;
  while (
    checkedNum < checkLimit
    && !hasNonTrivialDivisor
  ) {
    hasNonTrivialDivisor = int % checkedNum === 0;
    checkedNum += 2;
  }

  return !hasNonTrivialDivisor;
};

const generateQuestionAnswerPair = () => {
  const int = getRandomInteger(PRIME_NUMBERS_RANGE);

  const question = int.toString();
  const answer = isPrime(int) ? 'yes' : 'no';

  return [question, answer];
};

export default { generateQuestionAnswerPair };
