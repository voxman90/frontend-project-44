import { describe, expect, test } from '@jest/globals';

import { stringifyInt, getAnswer } from '../games/even-rules.js';

describe('Test stringifyInt:', () => {
  test('stringifyInt(num) === \'num\'', () => {
    expect(stringifyInt(0)).toBe('0');
    expect(stringifyInt(-1)).toBe('-1');
    expect(stringifyInt(10 ** 3)).toBe('1000');
  });
});

describe('Test getAnswer:', () => {
  const loopCount = 20;

  test('getAnswer(n) === \'yes\' | even(n)\n getAnswer(n) === \'no\' | odd(n)', () => {
    for (let i = 2; i < loopCount; i += 2) {
      expect(getAnswer(i)).toBe('yes');
      expect(getAnswer(i + 1)).toBe('no');
    }
  });
});
