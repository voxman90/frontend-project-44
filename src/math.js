import config from './config.js';

const {
  DEFAULT_RANDOM_INT_RANGE,
  DEFAULT_PROG_BASE_RANGE,
  DEFAULT_PROG_INC_RANGE,
  DEFAULT_PROG_SIZE_RANGE,
} = config;

const isEven = (n) => n % 2 === 0;

// Go through the sequence up to the first divisor of the number n
const isSequenceIncludesDivisor = (n, sequenceGenerator) => {
  let checked = sequenceGenerator.next();
  let includesDivisor = false;

  while (
    !checked.done
    && !includesDivisor
  ) {
    includesDivisor = n % checked.value === 0;
    checked = sequenceGenerator.next();
  }

  return includesDivisor;
};

/*
  Returns a function which returns the items of the sequence of the following form:
  a_1 = start, ..., a_n = next(a_{n-1}), ..., null, ...
  a_m = null | m >= n | a_n > end
*/
const createSequenceGenerator = (rules) => {
  const {
    start,
    end,
    next = (n) => n + 1,
  } = rules;

  return ((function* gen() {
    for (let num = start; num <= end; num = next(num)) {
      yield num;
    }

    return null;
  })());
};

const isPrimal = (n) => {
  // Immediately discard half of the numbers
  const isNonPrimalEven = n > 2 && isEven(n);
  if (
    n === 1
    || isNonPrimalEven
  ) {
    return false;
  }

  /*
    A nontrivial divisor greater than the square root of a number
    has a quotient less than the square root of the number
  */
  const squareRoot = Math.sqrt(n);
  const isSquare = n % squareRoot === 0;
  if (isSquare) {
    return false;
  }

  /*
    1, 2n | n > 2, integer(n) - already discard, so we start checks with 3
    and skip all the even numbers
  */
  const posibleDivisorGen = createSequenceGenerator({
    start: 3,
    end: Math.floor(squareRoot),
    next: (x) => x + 2,
  });
  const hasNonTrivialDivisor = isSequenceIncludesDivisor(n, posibleDivisorGen);

  return !hasNonTrivialDivisor;
};

// [0, 1) => [min, max] (including boundaries)
const getRandomInteger = (range = DEFAULT_RANDOM_INT_RANGE) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min + 1));
};

/*
  a_0 = base, ..., a_n = a_{n - 1} + inc | n: sizeRange[0] <= n <= sizeRange[1]
*/
const getRandomProgression = ({ baseRange, incRange, sizeRange } = {}) => {
  const base = getRandomInteger(baseRange || DEFAULT_PROG_BASE_RANGE);
  const inc = getRandomInteger(incRange || DEFAULT_PROG_INC_RANGE);
  const size = getRandomInteger(sizeRange || DEFAULT_PROG_SIZE_RANGE);

  // Create an arithmetic progression
  const progression = [];
  const sequenceConfig = {
    start: base,
    end: base + (size - 1) * inc,
    next: (n) => n + inc,
  };
  const progressionGen = createSequenceGenerator(sequenceConfig);
  let item = progressionGen.next();

  while (!item.done) {
    progression.push(item.value);
    item = progressionGen.next();
  }

  return progression;
};

const gcdRec = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcdRec(b, a % b);
};

const gcd = (a, b) => ((a < b) ? gcdRec(b, a) : gcdRec(a, b));

const math = {
  isEven,
  isPrimal,
  getRandomInteger,
  getRandomProgression,
  gcd,
};

export default math;
