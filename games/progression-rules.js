import math from '../src/math.js';

const MESSAGES = {
  rules: 'What number is missing in the progression?',
};

const PROGRESSION_MIN_SIZE = 5;
const PROGRESSION_MAX_SIZE = 10;
const PROGRESSION_SIZE_RANGE = [PROGRESSION_MIN_SIZE, PROGRESSION_MAX_SIZE + 1];

const generateQuestion = () => {
  const progression = math.getRandomProgression({ sizeRange: PROGRESSION_SIZE_RANGE });
  const { length } = progression;
  const skip = math.getRandomInteger([0, length]);

  return {
    progression,
    skip,
  };
};

const SKIP_MARK = '..';
const PROGRESSION_SEPARATOR = ' ';

const stringifyQuestion = ({ progression, skip }) => progression
  .map((val, i) => ((i === skip) ? SKIP_MARK : val))
  .join(PROGRESSION_SEPARATOR);

const getAnswer = ({ progression, skip }) => `${progression[skip]}`;

const progressionRules = {
  MESSAGES,
  generateQuestion,
  stringifyQuestion,
  getAnswer,
};

export default progressionRules;
