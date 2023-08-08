const isEven = (n) => n % 2 === 0;

const getRandomInteger = (range = [1, Number.MAX_SAFE_INTEGER]) => {
  const [min, max] = range;
  return min + Math.floor(Math.random() * (max - min));
};

const gcdRec = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcdRec(b, a % b);
};

const gcd = (a, b) => ((a < b) ? gcdRec(b, a) : gcdRec(b, a));

export { isEven, getRandomInteger, gcd };
