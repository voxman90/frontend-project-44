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

describe('Test stringifyOperation:', () => {
  test('stringifyOperation({ a, b, op }) === "a op b"', () => {
    expect(OPERATIONS.every((op) => (
      stringifyOperation({ a: 1, b: 2, op }) === `1 ${op} 2`
    ))).toBe(true);
  });
});

describe('Test applyOperation:', () => {
  const loopCount = 10;
  const { length } = OPERATIONS;

  for (let i = 0; i < length; i += 1) {
    const op = OPERATIONS[i];

    test(`applyOperation({ a, b, '${op}' }) === a ${op} b`, () => {
      for (let j = 0; j < loopCount; j += 1) {
        const { a, b } = getRandomPair();
        let result = a;

        switch (op) {
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

        expect(applyOperation({ a, b, op })).toBe(result);
      }
    });
  }
});
