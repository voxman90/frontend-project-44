import { describe, expect, test } from '@jest/globals';

import utils from '../src/utils.js';

const { getRandomInteger } = utils;

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
