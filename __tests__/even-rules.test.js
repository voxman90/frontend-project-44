import { describe, expect, test } from '@jest/globals';

import { isEven } from '../src/games/even-rules.js';

describe('Test isEven:', () => {
  const loopCount = 10;

  for (let i = 2; i < (loopCount + 1) * 2; i += 2) {
    test(`(n = ${i}) => true | even(n);\n (n = ${i + 1}) => false | odd(n)`, () => {
      expect(isEven(i)).toBe(true);
      expect(isEven(i + 1)).toBe(false);
    });
  }
});
