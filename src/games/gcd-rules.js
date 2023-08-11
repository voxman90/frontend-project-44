import utils from '../utils.js';

const generatePair = () => ({
  a: utils.getRandomInteger(),
  b: utils.getRandomInteger(),
});

const stringifyPair = ({ a, b }) => `${a} ${b}`;

const gcdRec = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcdRec(b, a % b);
};

const getGCD = (a, b) => ((a < b) ? gcdRec(b, a) : gcdRec(a, b));

const generateQuestionAnswerPair = () => {
  const pair = generatePair();

  return {
    question: stringifyPair(pair),
    answer: `${getGCD(pair.a, pair.b)}`,
  };
};

export default { generateQuestionAnswerPair };
export {
  stringifyPair,
  getGCD,
};
