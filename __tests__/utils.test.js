import { describe, expect, test } from '@jest/globals';

import utils from '../src/utils.js';

const {
  DEFAULT_LENGTH_RANGE,
  getRandomInteger,
  getRandomProgression,
} = utils;

describe('Test getRandomInteger:', () => {
  const loopCount = 10;

  test('(_) => n | integer(n)', () => {
    const isInteger = (n) => typeof n === 'number' && n === Math.floor(n);

    for (let i = 0; i < loopCount; i += 1) {
      expect(isInteger(getRandomInteger())).toBe(true);
    }
  });

  test('([n, n]) => n', () => {
    for (let i = 0; i < loopCount; i += 1) {
      expect(getRandomInteger([i, i])).toBe(i);
    }
  });

  const min = -100;
  const max = 100;

  test('([min, max]) => n | min <= n <= max', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const randomInt = getRandomInteger([min, max]);
      expect(randomInt).toBeLessThanOrEqual(max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
    }
  });
});

describe('Test getRandomProgression:', () => {
  const [MIN_LENGTH, MAX_LENGTH] = DEFAULT_LENGTH_RANGE;
  const loopCount = 5;

  test(`() => coll | ${MIN_LENGTH} <= coll.length <= ${MAX_LENGTH}`, () => {
    for (let i = 0; i < loopCount; i += 1) {
      const { length } = getRandomProgression();
      expect(length).toBeGreaterThanOrEqual(MIN_LENGTH);
      expect(length).toBeLessThanOrEqual(MAX_LENGTH);
    }
  });

  test('() => coll | arithmetic-progression(coll)', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const coll = getRandomProgression();
      const { length } = coll;
      const [first, second] = coll;
      const inc = second - first;

      for (let j = 2; j < length; j += 1) {
        expect(coll[j]).toBe(coll[j - 1] + inc);
      }
    }
  });
});
