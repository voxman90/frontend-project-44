import { getRandomInteger } from '../utils.js';

const generateQuestionAnswerPair = () => {
  const value = getRandomInteger();
  const isEvenOrNo = value % 2 === 0 ? 'yes' : 'no';

  return {
    question: `${value}`,
    answer: isEvenOrNo,
  };
};

export default { generateQuestionAnswerPair };
