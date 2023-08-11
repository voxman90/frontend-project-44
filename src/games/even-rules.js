import utils from '../utils.js';

const isEven = (n) => n % 2 === 0;

const generateQuestionAnswerPair = () => {
  const n = utils.getRandomInteger();

  return {
    question: `${n}`,
    answer: isEven(n) ? 'yes' : 'no',
  };
};

export default { generateQuestionAnswerPair };
export { isEven };
