import utils from '../utils.js';

const PROGRESSION_SEPARATOR = ' ';
const PROGRESSION_SKIP_MARK = '..';
const DEFAULT_BASE_RANGE = [1, 100];
const DEFAULT_INC_RANGE = [1, 10];
const DEFAULT_LENGTH_RANGE = [5, 10];

const generateRandomProgression = ({ baseRange, incRange, sizeRange } = {}) => {
  const base = utils.getRandomInteger(baseRange || DEFAULT_BASE_RANGE);
  const inc = utils.getRandomInteger(incRange || DEFAULT_INC_RANGE);
  const length = utils.getRandomInteger(sizeRange || DEFAULT_LENGTH_RANGE);

  const progression = [];
  let item = base;

  for (let i = 0; i < length; i += 1) {
    progression.push(item);
    item += inc;
  }

  return progression;
};

const stringifyProgression = ({ progression, skipIndex }) => progression
  .map((a, i) => ((i === skipIndex) ? PROGRESSION_SKIP_MARK : a))
  .join(PROGRESSION_SEPARATOR);

const generateQuestionAnswerPair = () => {
  const progression = generateRandomProgression();
  const { length } = progression;
  const skipIndex = utils.getRandomInteger([0, length - 1]);
  const skippedItem = progression[skipIndex];

  return {
    question: stringifyProgression({ progression, skipIndex }),
    answer: `${skippedItem}`,
  };
};

export default { generateQuestionAnswerPair };
export {
  PROGRESSION_SEPARATOR,
  PROGRESSION_SKIP_MARK,
  DEFAULT_LENGTH_RANGE,
  stringifyProgression,
  generateRandomProgression,
};
