import utils from '../utils.js';

const PROGRESSION_SEPARATOR = ' ';
const PROGRESSION_SKIP_MARK = '..';

const stringifyProgression = ({ progression, skipIndex }) => progression
  .map((a, i) => ((i === skipIndex) ? PROGRESSION_SKIP_MARK : a))
  .join(PROGRESSION_SEPARATOR);

const generateQuestionAnswerPair = () => {
  const progression = utils.getRandomProgression();
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
  stringifyProgression,
};
