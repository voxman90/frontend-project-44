import { getRandomInteger } from '../utils.js';

const isEven = (int) => int % 2 === 0;

const generateQuestionAnswerPair = () => {
  const int = getRandomInteger();

  const question = int.toString();
  const answer = isEven(int) ? 'yes' : 'no';

  return [question, answer];
};

export default { generateQuestionAnswerPair };
