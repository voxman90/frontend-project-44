import { describe, expect, test } from '@jest/globals';

import utils from '../src/utils.js';
import {
  OPERATIONS,
  stringifyOperation,
  applyOperation,
} from '../src/games/calc-rules.js';

describe('Test stringifyOperation:', () => {
  OPERATIONS.forEach((op) => {
    test(`({ 0, 1, ${op} }) => '0 ${op} 1'`, () => {
      expect(stringifyOperation({ a: 0, b: 1, op })).toBe(`0 ${op} 1`);
    });
  });
});

const MIN_INT = -100;
const MAX_INT = 100;

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
