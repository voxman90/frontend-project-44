import { describe, expect, test } from '@jest/globals';

import {
  PROGRESSION_SKIP_MARK as MARK,
  PROGRESSION_SEPARATOR as WS,
  DEFAULT_LENGTH_RANGE,
  stringifyProgression,
  generateRandomProgression,
} from '../src/games/progression-rules.js';

describe('Test stringifyProgression:', () => {
  const progression = [1, 3, 5];
  const result = [
    `${MARK}${WS}3${WS}5`,
    `1${WS}${MARK}${WS}5`,
    `1${WS}3${WS}${MARK}`,
  ];

  test(`({[1, 3, 5], skipIndex: 1 }) => '1${WS}${MARK}${WS}'`, () => {
    const { length } = stringifyProgression;
    for (let i = 0; i < length; i += 1) {
      expect(stringifyProgression({ progression, skipIndex: 0 }))
        .toBe(result[i]);
    }
  });
});

describe('Test getRandomProgression:', () => {
  const [MIN_LENGTH, MAX_LENGTH] = DEFAULT_LENGTH_RANGE;
  const loopCount = 5;

  test(`() => coll | ${MIN_LENGTH} <= coll.length <= ${MAX_LENGTH}`, () => {
    for (let i = 0; i < loopCount; i += 1) {
      const { length } = generateRandomProgression();
      expect(length).toBeGreaterThanOrEqual(MIN_LENGTH);
      expect(length).toBeLessThanOrEqual(MAX_LENGTH);
    }
  });

  test('() => coll | arithmetic-progression(coll)', () => {
    for (let i = 0; i < loopCount; i += 1) {
      const coll = generateRandomProgression();
      const { length } = coll;
      const [first, second] = coll;
      const inc = second - first;

      for (let j = 2; j < length; j += 1) {
        expect(coll[j]).toBe(coll[j - 1] + inc);
      }
    }
  });
});
