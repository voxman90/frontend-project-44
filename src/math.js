const isEven = (n) => n % 2 === 0;

const getRandomInteger = (range = [1, Number.MAX_SAFE_INTEGER]) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min));
};

export { isEven, getRandomInteger };
