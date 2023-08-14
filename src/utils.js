const DEFAULT_INT_RANGE = [0, 100];

const getRandomInteger = (range = DEFAULT_INT_RANGE) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min + 1));
};

export default { getRandomInteger };
export { getRandomInteger };
