import { getRandomInteger } from '../utils.js';

const getGCD = (intA, intB) => {
  if (intB === 0) {
    return Math.abs(intA);
  }

  return getGCD(intB, intA % intB);
};

const generateQuestionAnswerPair = () => {
  const intA = getRandomInteger();
  const intB = getRandomInteger();

  const question = `${intA} ${intB}`;
  const answer = getGCD(intA, intB).toString();

  return [question, answer];
};

export default { generateQuestionAnswerPair };
