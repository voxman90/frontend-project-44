import { describe, expect, test } from '@jest/globals';

import { isEven, getRandomInteger } from '../src/math.js';

describe('Test isEven', () => {
  const MIN = 0;
  const MAX = 10;

  test('isEven(even number) === true', () => {
    for (let i = MIN; i < MAX; i += 2) {
      expect(isEven(i)).toBe(true);
    }
  });

  test('isEven(odd number) === false', () => {
    for (let i = MIN + 1; i < MAX; i += 2) {
      expect(isEven(i)).toBe(false);
    }
  });
});

describe('getRandomInteger', () => {
  const TIMES = 100;

  test('getRandomInteger() is integer', () => {
    for (let i = 0; i < TIMES; i += 1) {
      expect(Number.isInteger(getRandomInteger())).toBe(true);
    }
  });

  const MIN = 0;
  const MAX = 10;

  test('0 <= getRandomInteger(0, 10) < 10', () => {
    for (let i = 0; i < TIMES; i += 1) {
      const result = getRandomInteger([MIN, MAX]);
      expect(result).toBeLessThan(MAX);
      expect(result).toBeGreaterThanOrEqual(MIN);
    }
  });

  test('MSI - 1 <= getRandomInteger(MSI - 1, MSI) < MSI', () => {
    const { MAX_SAFE_INTEGER } = Number;
    for (let i = 0; i < TIMES; i += 1) {
      const result = getRandomInteger([MAX_SAFE_INTEGER - 1, MAX_SAFE_INTEGER]);
      expect(result).toBe(MAX_SAFE_INTEGER - 1);
    }
  });
});
