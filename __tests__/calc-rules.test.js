import { describe, expect, test } from '@jest/globals';

import config from '../src/config.js';
import { applyOperation, stringifyOperation } from '../games/calc-rules.js';

const {
  RANDOM_INT_RANGE,
  OPERATIONS,
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
  const { length } = OPERATIONS;

  for (let i = 0; i < length; i += 1) {
    const operation = OPERATIONS[i];

    test(`applyOperation({ a, b, '${operation}' }) === a ${operation} b`, () => {
      for (let j = 0; j < loopCount; j += 1) {
        const { a, b } = getRandomPair();
        let result = a;

        switch (operation) {
          case '-':
            result -= b;
            break;
          case '+':
            result += b;
            break;
          case '*':
            result *= b;
            break;
          default:
        }

        expect(applyOperation({ a, b, operation })).toBe(result);
      }
    });
  }
});
