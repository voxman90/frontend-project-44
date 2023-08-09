const isEven = (n) => n % 2 === 0;

const getRandomInteger = (range = [1, Number.MAX_SAFE_INTEGER]) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min));
};

const DEFAULT_BASE_RANGE = [1, 100];
const DEFAULT_INC_RANGE = [1, 10];
const DEFAULT_SIZE_RANGE = [5, 10];

const getRandomProgression = ({ sizeRange, baseRange, incRange, rule } = {}) => {
  const randomBase = getRandomInteger(baseRange || DEFAULT_BASE_RANGE);
  const randomInc = getRandomInteger(incRange || DEFAULT_INC_RANGE);
  const size = getRandomInteger(sizeRange || DEFAULT_SIZE_RANGE);
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
  getRandomInteger,
  getRandomProgression,
  gcd,
};

export default math;
