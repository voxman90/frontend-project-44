import { describe, expect, test } from '@jest/globals';

import config from '../src/config.js';
import { applyOperation, stringifyOperation } from '../games/calc-rules.js';

const {
  RANDOM_INT_RANGE,
} = config;

const RANDOM_INT_CEIL = RANDOM_INT_RANGE[1] + 1;
const getRandomInteger = () => Math.floor(Math.random() * RANDOM_INT_CEIL);
const getRandomPair = () => ({ a: getRandomInteger(), b: getRandomInteger() });

describe('Test stringifyOperation', () => {
  test('stringifyOperation({ a, b, operation }) === "a operation b"', () => {
    expect(stringifyOperation({ a: 1, b: 2, operation: '+' })).toBe('1 + 2');
    expect(stringifyOperation({ a: 1, b: 2, operation: '-' })).toBe('1 - 2');
    expect(stringifyOperation({ a: 1, b: 2, operation: '*' })).toBe('1 * 2');
    expect(stringifyOperation({ a: 1, b: 2, operation: '/' })).toBe('1 / 2');
  });
});

describe('Test applyOperation', () => {
  const loopCount = 10;
  test('applyOperation({ a, b, \'-\' }) === a - b', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const { a, b } = getRandomPair();
      expect(applyOperation({ a, b, operation: '-' })).toBe(a - b);
    }
  });

  test('applyOperation({ a, b, \'+\' }) === a + b', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const { a, b } = getRandomPair();
      expect(applyOperation({ a, b, operation: '+' })).toBe(a + b);
    }
  });

  test('applyOperation({ a, b, \'*\' }) === a * b', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const { a, b } = getRandomPair();
      expect(applyOperation({ a, b, operation: '*' })).toBe(a * b);
    }
  });
});
