import { describe, test, expect } from '@jest/globals';

import config from '../src/config.js';
import { isPrimal } from '../games/prime-rules.js';

const {
  PRIMAL_NUMBERS,
  NON_PRIMAL_NUMBERS,
} = config;

describe('Test isPrimal:', () => {
  test('Simple tests', () => {
    expect(isPrimal(1)).toBe('no');
    expect(isPrimal(2)).toBe('yes');
    expect(isPrimal(2 * 3 * 4)).toBe('no');
    expect(isPrimal(97)).toBe('yes');
  });

  test('isPrimal(n) === \'yes\' | primal(n)', () => {
    expect(PRIMAL_NUMBERS.every((n) => isPrimal(n) === 'yes')).toBe(true);
  });

  test('isPrimal(n) === \'no\' | not(primal(n))', () => {
    expect(NON_PRIMAL_NUMBERS.some((n) => isPrimal(n) === 'yes')).toBe(false);
  });
});
