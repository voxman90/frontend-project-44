import { describe, test, expect } from '@jest/globals';

import config from '../src/config.js';
import { isPrimal } from '../games/prime-rules.js';

const {
  PRIMAL_NUMBERS,
  NON_PRIMAL_NUMBERS,
} = config;

describe('Test isPrimal:', () => {
  test('isPrimal(n) === \'yes\' | primal(n)', () => {
    expect(PRIMAL_NUMBERS.every((n) => isPrimal(n) === 'yes')).toBe(true);
  });

  test('isPrimal(n) === \'no\' | not(primal(n))', () => {
    expect(NON_PRIMAL_NUMBERS.every((n) => isPrimal(n) === 'no')).toBe(true);
  });
});
