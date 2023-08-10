import { describe, expect, test } from '@jest/globals';

import config from '../src/config.js';
import math from '../src/math.js';

const {
  isEven,
  isPrimal,
  getRandomInteger,
  getRandomProgression,
  gcd,
} = math;

describe('Test isEven:', () => {
  const loopLimit = 20;

  test('isEven(n) === true | even(n)\n isEven(n) === false | odd(n)', () => {
    for (let i = 0; i < loopLimit; i += 2) {
      expect(isEven(i)).toBe(true);
      expect(isEven(i + 1)).toBe(false);
    }
  });
});

describe('Test isPrimal:', () => {
  const {
    PRIMAL_NUMBERS,
    NON_PRIMAL_NUMBERS,
  } = config;

  test('isPrimal(n) === true | primal(n))', () => {
    expect(PRIMAL_NUMBERS.every(isPrimal)).toBe(true);
  });

  test('isPrimal(n) === false | not(primal(n))', () => {
    expect(NON_PRIMAL_NUMBERS.some(isPrimal)).toBe(false);
  });
});

describe('Test getRandomInteger:', () => {
  const loopCount = 10;

  test('getRandomInteger(_, _) === n | integer(n)', () => {
    for (let i = 0; i < loopCount; i += 1) {
      expect(Number.isInteger(getRandomInteger())).toBe(true);
    }
  });

  test('getRandomInteger(n, n) === n', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const randomInt = getRandomInteger([i, i]);
      expect(randomInt).toBe(i);
    }
  });

  const min = 0;
  const max = 10;

  test(`getRandomInteger(min, max) === n | ${min} <= n <= ${max}`, () => {
    for (let i = 0; i < loopCount; i += 1) {
      const randomInt = getRandomInteger([min, max]);
      expect(randomInt).toBeLessThanOrEqual(max);
      expect(randomInt).toBeGreaterThanOrEqual(min);
    }
  });
});

describe('Test gsd:', () => {
  const loopCount = 10;

  test('gcd(a, 0) === a', () => {
    for (let i = 0; i < loopCount; i += 1) {
      expect(gcd(i, 0)).toBe(i);
    }
  });

  test('gcd(a, a) === a', () => {
    for (let i = 1; i <= loopCount; i += 1) {
      expect(gcd(i, i)).toBe(i);
    }
  });

  const nonPrimeNumbers = [121, 64, 81, 27, 16, 363];

  test('gcd(a, b) === gcd(b, a)', () => {
    const length = nonPrimeNumbers.length / 2;
    for (let i = 0; i < length; i += 1) {
      const a = nonPrimeNumbers.at(i);
      const b = nonPrimeNumbers.at(-(i + 1));
      expect(gcd(a, b)).toBe(gcd(b, a));
    }
  });

  const primeNumbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  test('gcd(a, b) === 1 | (a, b) === 1', () => {
    const { length } = primeNumbers;
    for (let i = 0; i < length; i += 1) {
      for (let j = i + 1; j < length; j += 1) {
        expect(gcd(primeNumbers[i], primeNumbers[j])).toBe(1);
      }
    }
  });

  test('gcd(a, b) === n | (a, b) = n, n > 1', () => {
    const GCD = 2 ** 3 * 3 ** 2 * 7;

    for (let i = 0; i < primeNumbers.length; i += 1) {
      const a = GCD * primeNumbers.at(i);
      const b = GCD * primeNumbers.at(-(i + 1));
      expect(gcd(a, b)).toBe(GCD);
    }
  });
});

describe('Test getRandomProgression:', () => {
  const {
    PROGRESSION_MIN_SIZE,
    PROGRESSION_MAX_SIZE,
  } = config;

  const loopCount = 5;

  test(`${PROGRESSION_MIN_SIZE} <= progression.length <= ${PROGRESSION_MAX_SIZE}`, () => {
    for (let i = 1; i <= loopCount; i += 1) {
      const { length } = getRandomProgression();
      expect(length).toBeGreaterThanOrEqual(PROGRESSION_MIN_SIZE);
      expect(length).toBeLessThanOrEqual(PROGRESSION_MAX_SIZE);
    }
  });

  const getNextItemFunc = (base, inc) => {
    let acc = base;
    return (() => {
      acc += inc;
      return acc;
    });
  };

  test('If undefined(rule) => arithmetic-progression(rule)', () => {
    for (let i = 1; i <= loopCount; i += 1) {
      const progression = getRandomProgression();
      const { length } = progression;
      const [base, secondItem] = progression;
      const inc = secondItem - base;
      const next = getNextItemFunc(base, inc);

      for (let j = 1; j < length; j += 1) {
        expect(progression[j]).toBe(next());
      }
    }
  });
});
