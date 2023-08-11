import { describe, expect, test } from '@jest/globals';

import utils from '../src/utils.js';
import {
  generatePair,
  stringifyPair,
  getGCD,
} from '../src/games/gcd-rules.js';

const { DEFAULT_INT_RANGE: [MIN_INT, MAX_INT] } = utils;

describe('Test generatePair:', () => {
  const loopCount = 10;

  const isIntegerAndInRange = (n) => (
    `${typeof n}` === 'number'
    && n === Math.floor(n)
  );

  for (let i = 0; i < loopCount; i += 1) {
    const { a, b } = generatePair();
    describe(`() => { a = ${a}, b = ${b} } |`, () => {
      test(`a = ${a} | integer(a) && ${MIN_INT} <= a <= ${MAX_INT}`, () => {
        expect(isIntegerAndInRange(a)).toBe(true);
      });

      test(`b = ${b} | ineger(b) && ${MIN_INT} <= b <= ${MAX_INT}`, () => {
        expect(isIntegerAndInRange(b)).toBe(true);
      });
    });
  }
});

describe('Test stringifyPair:', () => {
  test('({ a, b }) => \'a b\'', () => {
    expect(stringifyPair({ a: 0, b: 1 })).toBe('0 1');
    expect(stringifyPair({ a: 1, b: 0 })).toBe('1 0');
  });
});

describe('Test getGCD:', () => {
  const primeNumbers = [
    53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  const nonPrimeNumbers = [
    4, 9, 16, 32, 32,
    45, 72, 84, 100, 121,
  ];
  const loopCount = 5;

  test('({ a, 0 }) => a', () => {
    for (let i = 0; i < primeNumbers.length; i += 1) {
      expect(getGCD(primeNumbers[i], 0)).toBe(primeNumbers[i]);
    }
  });

  test('({ a, a }) => a', () => {
    for (let a = 1; a <= loopCount; a += 1) {
      expect(getGCD(a, a)).toBe(a);
    }
  });

  test('({ a, b }) <=> ({ b, a })', () => {
    for (let i = 0; i < nonPrimeNumbers.length; i += 1) {
      const a = nonPrimeNumbers.at(i);
      const b = nonPrimeNumbers.at(-i - 1);
      expect(getGCD(a, b)).toBe(getGCD(b, a));
    }
  });

  test('({ a, b }) => 1 | (a, b) = 1', () => {
    for (let i = 0; i < primeNumbers.length; i += 1) {
      expect(getGCD(primeNumbers.at(i), primeNumbers.at(-i - 1))).toBe(1);
    }
  });

  test('({ a, b }) => c | (a, b) = c, c > 1', () => {
    for (let i = 0; i < primeNumbers.length; i += 1) {
      const gcd = 4 * 9 * 25;
      const a = gcd * primeNumbers.at(i);
      const b = gcd * primeNumbers.at(-i - 1);
      expect(getGCD(a, b)).toBe(gcd);
    }
  });
});
