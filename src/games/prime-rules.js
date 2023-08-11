import utils from '../utils.js';

const PRIME_NUMBERS_RANGE = [2, 97];

const isPrime = (n) => {
  const isEven = n % 2 === 0;
  const isNonPrimalEven = n > 2 && isEven;
  if (n === 1 || isNonPrimalEven) {
    return false;
  }

  const squareRoot = Math.sqrt(n);
  const isSquare = n % squareRoot === 0;
  if (isSquare) {
    return false;
  }

  let checkedNumber = 3;
  const checkLimit = Math.floor(squareRoot);
  let hasNonTrivialDivisor = false;
  while (
    checkedNumber <= checkLimit
    && !hasNonTrivialDivisor
  ) {
    hasNonTrivialDivisor = n % checkedNumber === 0;
    checkedNumber += 2;
  }

  return !hasNonTrivialDivisor;
};

const generateQuestionAnswerPair = () => {
  const n = utils.getRandomInteger(PRIME_NUMBERS_RANGE);

  return {
    question: `${n}`,
    answer: isPrime(n) ? 'yes' : 'no',
  };
};

export default { generateQuestionAnswerPair };
export { isPrime };
