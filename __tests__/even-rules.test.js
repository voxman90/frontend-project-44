import { describe, expect, test } from '@jest/globals';

import evenRules from '../games/even-rules.js';

const { stringifyQuestion, getAnswer } = evenRules;

describe('Test stringifyQuestion', () => {
  test('stringifyQuestion(num) === "num"', () => {
    expect(stringifyQuestion(0)).toBe('0');
    expect(stringifyQuestion(-1)).toBe('-1');
    expect(stringifyQuestion(10 ** 3)).toBe('1000');
  });
});

describe('Test getAnswer === "yes" if even(n) || "no" if odd(n)', () => {
  const COUNT = 10;

  test('even, must return "yes"', () => {
    for (let i = 0; i < COUNT; i += 2) {
      expect(getAnswer(i)).toBe('yes');
    }
  });

  test('odd, must return "no"', () => {
    for (let i = 1; i < COUNT; i += 2) {
      expect(getAnswer(i)).toBe('no');
    }
  });
});
