import { describe, expect, test } from '@jest/globals';

import calcRules from '../games/calc-rules.js';

const { stringifyQuestion, getAnswer } = calcRules;

const RANDOM_INTEGER_CEIL = 100;
const getRandomInteger = () => Math.floor(Math.random() * RANDOM_INTEGER_CEIL);
const getRandomPair = () => ({ a: getRandomInteger(), b: getRandomInteger() });

describe('Test stringifyQuestion', () => {
  test('stringifyQuestion({ a, b, operation }) === "a operation b"', () => {
    expect(stringifyQuestion({ a: 1, b: 2, operation: '+' })).toBe('1 + 2');
    expect(stringifyQuestion({ a: 1, b: 2, operation: '-' })).toBe('1 - 2');
    expect(stringifyQuestion({ a: 1, b: 2, operation: '*' })).toBe('1 * 2');
    expect(stringifyQuestion({ a: 1, b: 2, operation: '/' })).toBe('1 / 2');
  });
});

describe('Test getAnswer\n getAnswer({ a, b, operation }) === operation(a, b)', () => {
  const COUNT = 10;
  test('operation: -', () => {
    for (let i = 0; i < COUNT; i += 1) {
      const { a, b } = getRandomPair();
      expect(getAnswer({ a, b, operation: '-' })).toBe(`${a - b}`);
    }
  });

  test('operation: +', () => {
    for (let i = 0; i < COUNT; i += 1) {
      const { a, b } = getRandomPair();
      expect(getAnswer({ a, b, operation: '+' })).toBe(`${a + b}`);
    }
  });

  test('operation: *', () => {
    for (let i = 0; i < COUNT; i += 1) {
      const { a, b } = getRandomPair();
      expect(getAnswer({ a, b, operation: '*' })).toBe(`${a * b}`);
    }
  });
});
