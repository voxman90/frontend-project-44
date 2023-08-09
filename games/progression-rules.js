import config from '../src/config.js';
import math from '../src/math.js';

const {
  PROGRESSION_MIN_SIZE,
  PROGRESSION_MAX_SIZE,
  PROGRESSION_SEPARATOR,
  PROGRESSION_SKIP_MARK,
} = config;

const RULE = 'What number is missing in the progression?';

const PROGRESSION_SIZE_RANGE = [PROGRESSION_MIN_SIZE, PROGRESSION_MAX_SIZE];

// Generate a random arithmetic progression and the index of the skipped item
const generateProgression = () => {
  const progression = math.getRandomProgression({
    sizeRange: PROGRESSION_SIZE_RANGE,
  });
  const { length } = progression;
  const skipIndex = math.getRandomInteger([0, length - 1]);

  return {
    progression,
    skipIndex,
  };
};

/*
  Output the progression as a string, where the items are separated by
  a separator and the skipped item is replaced by a skip mark.
  Like this: '1 3 5 .. 9 11'
*/
const stringifyProgression = ({ progression, skipIndex }) => progression
  .map((val, i) => ((i === skipIndex) ? PROGRESSION_SKIP_MARK : val))
  .join(PROGRESSION_SEPARATOR);

const getSkippedItem = ({ progression, skipIndex }) => progression[skipIndex];

const progressionRules = {
  RULE,
  generateQuestion: generateProgression,
  stringifyQuestion: stringifyProgression,
  getAnswer: (args) => `${getSkippedItem(args)}`,
};

export default progressionRules;
export { generateProgression, stringifyProgression, getSkippedItem };
