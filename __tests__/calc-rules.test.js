import { describe, expect, test } from '@jest/globals';

import utils from '../src/utils.js';
import {
  OPERATIONS,
  generateOperation,
  stringifyOperation,
  applyOperation,
} from '../src/games/calc-rules.js';

const { DEFAULT_INT_RANGE: [MIN_INT, MAX_INT] } = utils;

describe('Test generateOperation:', () => {
  describe('() => { a, b, op } |', () => {
    const loopCount = 10;

    for (let i = 0; i < loopCount; i += 1) {
      const { a, b, op } = generateOperation();
      test(`op = '${op}' | op ∈ ${OPERATIONS}`, () => {
        expect(OPERATIONS.includes(op)).toBe(true);
      });

      const isInRange = (n) => MIN_INT <= n && n <= MAX_INT;

      test(`a = ${a} | ${MIN_INT} <= a <= ${MAX_INT}`, () => {
        expect(isInRange(a)).toBe(true);
      });

      test(`b = ${b} | ${MIN_INT} <= b <= ${MAX_INT}`, () => {
        expect(isInRange(b)).toBe(true);
      });
    }
  });
});

describe('Test stringifyOperation:', () => {
  OPERATIONS.forEach((op) => {
    test(`({ 0, 1, ${op} }) => '0 ${op} 1'`, () => {
      expect(stringifyOperation({ a: 0, b: 1, op })).toBe(`0 ${op} 1`);
    });
  });
});

describe('Test applyOperation:', () => {
  const loopCount = 10;
  const { length } = OPERATIONS;

  for (let i = 0; i < length; i += 1) {
    const op = OPERATIONS[i];

    for (let j = 0; j < loopCount; j += 1) {
      const a = utils.getRandomInteger([MIN_INT, MAX_INT]);
      const b = utils.getRandomInteger([MIN_INT, MAX_INT]);

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

      test(`({ a = ${a}, b = ${b}, '${op}' }) => ${result}`, () => {
        expect(applyOperation({ a, b, op })).toBe(result);
      });
    }
  }
});
