import { describe, expect, test } from '@jest/globals';

import { isEven, getRandomInteger, gcd } from '../src/math.js';

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

describe('Test gsd', () => {
  const COUNT = 10;

  test('gcd(a, a) === a', () => {
    for (let i = 1; i <= COUNT; i += 1) {
      expect(gcd(i, i)).toBe(i);
    }
  });

  const NON_PRIME_NUMBERS = [121, 64, 81, 27, 16, 363];

  test('gcd(a, b) === gcd(b, a)', () => {
    const length = NON_PRIME_NUMBERS.length / 2;
    for (let i = 0; i < length; i += 1) {
      const a = NON_PRIME_NUMBERS.at(i);
      const b = NON_PRIME_NUMBERS.at(-(i + 1));
      expect(gcd(a, b)).toBe(gcd(b, a));
    }
  });

  const PRIME_NUMBERS = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  test('gcd(a, b) === 1 if (a, b) = 1', () => {
    const { length } = PRIME_NUMBERS;
    for (let i = 0; i < length; i += 1) {
      for (let j = i + 1; j < length; j += 1) {
        expect(gcd(PRIME_NUMBERS[i], PRIME_NUMBERS[j])).toBe(1);
      }
    }
  });

  test('gcd(a, b) === n if (a, b) = n, n > 1', () => {
    const GCD = 2 ** 3 * 3 ** 2 * 7;

    for (let i = 0; i < PRIME_NUMBERS.length; i += 1) {
      const a = GCD * PRIME_NUMBERS.at(i);
      const b = GCD * PRIME_NUMBERS.at(-(i + 1));
      expect(gcd(a, b)).toBe(GCD);
    }
  });
});
