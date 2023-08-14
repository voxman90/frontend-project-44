import { getRandomInteger } from '../utils.js';

const PROGRESSION_SEPARATOR = ' ';
const PROGRESSION_SKIP_MARK = '..';
const DEFAULT_BASE_RANGE = [1, 100];
const DEFAULT_INC_RANGE = [1, 10];
const DEFAULT_LENGTH_RANGE = [5, 10];

const generateRandomProgression = ({ baseRange, incRange, sizeRange } = {}) => {
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

const generateQuestionAnswerPair = () => {
  const progression = generateRandomProgression();
  const { length } = progression;
  const skipIndex = getRandomInteger([0, length - 1]);
  const skippedItem = progression[skipIndex];

  const progressionQuestion = progression
    .map((value, i) => ((i === skipIndex) ? PROGRESSION_SKIP_MARK : value))
    .join(PROGRESSION_SEPARATOR);

  return {
    question: progressionQuestion,
    answer: `${skippedItem}`,
  };
};

export default { generateQuestionAnswerPair };
