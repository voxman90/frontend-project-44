const DEFAULT_INT_RANGE = [0, 100];
const DEFAULT_BASE_RANGE = [1, 100];
const DEFAULT_INC_RANGE = [1, 10];
const DEFAULT_LENGTH_RANGE = [5, 10];

const getRandomInteger = (range = DEFAULT_INT_RANGE) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min + 1));
};

const getRandomProgression = ({ baseRange, incRange, sizeRange } = {}) => {
  const base = getRandomInteger(baseRange || DEFAULT_BASE_RANGE);
  const inc = getRandomInteger(incRange || DEFAULT_INC_RANGE);
  const length = getRandomInteger(sizeRange || DEFAULT_LENGTH_RANGE);

  const progression = [];
  let item = base;

  for (let i = 0; i < length; i += 1) {
    progression.push(item);
    item += inc;
  }

  return progression;
};

export default {
  DEFAULT_INT_RANGE,
  DEFAULT_LENGTH_RANGE,
  getRandomInteger,
  getRandomProgression,
};
