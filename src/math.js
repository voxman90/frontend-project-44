import config from './config.js';

const {
  DEFAULT_RANDOM_INT_RANGE,
  DEFAULT_PROG_BASE_RANGE,
  DEFAULT_PROG_INC_RANGE,
  DEFAULT_PROG_SIZE_RANGE,
} = config;

const isEven = (n) => n % 2 === 0;

const isNonPrimalEven = (n) => n > 2 && isEven(n);

// Go through the sequence up to the first divisor of the number n
const isSequenceIncludesDivisor = (n, sequenceRule) => {
  let checked = sequenceRule();
  let includesDivisor = false;

  while (
    checked !== null
    && !includesDivisor
  ) {
    includesDivisor = n % checked === 0;
    checked = sequenceRule();
  }

  return includesDivisor;
};

/*
  Returns a function which returns the items of the sequence of the following form:
  a_1 = start, ..., a_n = a_{n-1} + inc, ..., null, ... | inc > 0
  a_m = null | m >= n | a_n > end
*/
const createSequenceRule = ({ start, end, inc }) => {
  const absInc = Math.abs(inc) || 1;
  let num = start;
  return () => {
    if (num > end) {
      return null;
    }

    const res = num;
    num += absInc;
    return res;
  };
};

const isPrimal = (n) => {
  // Immediately discard half of the numbers
  if (
    n === 1
    || isNonPrimalEven(n)
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
  const rule = createSequenceRule({
    start: 3,
    end: Math.floor(squareRoot),
    inc: 2,
  });
  const hasNonTrivialDivisor = isSequenceIncludesDivisor(n, rule);

  return !hasNonTrivialDivisor;
};

// [0, 1) => [min, max] (including boundaries)
const getRandomInteger = (range = DEFAULT_RANDOM_INT_RANGE) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min + 1));
};

/*
  a_0 = base, ..., a_n = rule(a_{n - 1}, inc?) | n: size[0] <= n <= size[1]
  By default (without a specified rule) the function will return an arithmetic sequence
*/
const getRandomProgression = ({ baseRange, incRange, sizeRange, rule } = {}) => {
  const randomBase = getRandomInteger(baseRange || DEFAULT_PROG_BASE_RANGE);
  const randomInc = getRandomInteger(incRange || DEFAULT_PROG_INC_RANGE);
  const size = getRandomInteger(sizeRange || DEFAULT_PROG_SIZE_RANGE);
  const map = (rule === undefined) ? (n, inc) => n + inc : rule;

  const progression = [randomBase];

  for (let i = 1; i < size; i += 1) {
    const nextItem = map(progression.at(-1), randomInc);
    progression.push(nextItem);
  }

  return progression;
};

const gcdRec = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcdRec(b, a % b);
};

const gcd = (a, b) => ((a < b) ? gcdRec(b, a) : gcdRec(b, a));

const math = {
  isEven,
  isPrimal,
  getRandomInteger,
  getRandomProgression,
  gcd,
};

export default math;
