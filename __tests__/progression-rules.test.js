import { describe, expect, test } from '@jest/globals';

import progressionRules from '../games/progression-rules';

const { generateQuestion, stringifyQuestion, getAnswer } = progressionRules;

describe('Test generateQuestion', () => {
  const COUNT = 5;
  const MIN_PROGRESSION_LENGTH = 5;

  test(`generateQuestion() => arr, arr.length >= ${MIN_PROGRESSION_LENGTH}`, () => {
    for (let i = 0; i < COUNT; i += 1) {
      const progression = generateQuestion();
      expect(progression.length).toBeGreaterThanOrEqual(MIN_PROGRESSION_LENGTH);
    }
  });
});

describe('Test stringifyQuestion', () => {
  const PROGRESSION = [1, 3, 5, 7, 9];

  test('stringifyQuestion({[1, 3, 5, 7, 9], skip: 2 }) === 1 3 .. 7 9', () => {
    expect(stringifyQuestion({
      progression: PROGRESSION,
      skip: 0,
    })).toBe('.. 3 5 7 9');
    expect(stringifyQuestion({
      progression: PROGRESSION,
      skip: 2,
    })).toBe('1 3 .. 7 9');
    expect(stringifyQuestion({
      progression: PROGRESSION,
      skip: PROGRESSION.length - 1,
    })).toBe('1 3 5 7 ..');
  });
});

describe('Test getAnswer === String(skiped number in progression)', () => {
  const PROGRESSION = [4, 7, 10, 13, 16, 19, 22, 25, 28, 31];

  for (let i = 0; i < PROGRESSION.length; i += 1) {
    test(`getAnswer(${PROGRESSION}, skip: ${i}) === ${PROGRESSION[i]}`, () => {
      expect(getAnswer({
        progression: PROGRESSION,
        skip: i,
      })).toBe(`${PROGRESSION[i]}`);
    });
  }
});
