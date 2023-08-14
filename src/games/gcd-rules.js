import { getRandomInteger } from '../utils.js';

const gcdIter = (integerA, integerB) => {
  if (integerB === 0) {
    return integerA;
  }

  return gcdIter(integerB, integerA % integerB);
};

const generateQuestionAnswerPair = () => {
  const integerA = getRandomInteger();
  const integerB = getRandomInteger();
  const gdc = (integerA < integerB)
    ? gcdIter(integerB, integerA)
    : gcdIter(integerA, integerB);

  return {
    question: `${integerA} ${integerB}`,
    answer: `${gdc}`,
  };
};

export default { generateQuestionAnswerPair };
