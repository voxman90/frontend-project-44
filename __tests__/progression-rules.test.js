import { describe, expect, test } from '@jest/globals';

import config from '../src/config.js';
import { generateProgression, stringifyProgression, getSkippedItem } from '../games/progression-rules.js';

const {
  PROGRESSION_MIN_SIZE,
  PROGRESSION_MAX_SIZE,
  PROGRESSION_SKIP_MARK: MARK,
  PROGRESSION_SEPARATOR: WS,
} = config;

describe('Test generateProgression:', () => {
  const loopCount = 5;

  test(`generateProgression() => arr | ${PROGRESSION_MIN_SIZE} <= arr.length <= ${PROGRESSION_MAX_SIZE}`, () => {
    for (let i = 0; i < loopCount; i += 1) {
      const { progression: { length } } = generateProgression();
      expect(length).toBeGreaterThanOrEqual(PROGRESSION_MIN_SIZE);
      expect(length).toBeLessThanOrEqual(PROGRESSION_MAX_SIZE);
    }
  });
});

describe('Test stringifyProgression:', () => {
  const progression = [1, 3, 5];
  const result = [
    `${MARK}${WS}3${WS}5`,
    `1${WS}${MARK}${WS}5`,
    `1${WS}3${WS}${MARK}`,
  ];

  test('stringifyProgression({[1, 3, 5], skipIndex: 1 }) === \'1 .. 5\'', () => {
    const { length } = stringifyProgression;
    for (let i = 0; i < length; i += 1) {
      expect(stringifyProgression({ progression, skipIndex: 0 }))
        .toBe(result[i]);
    }
  });
});

describe('Test getSkippedItem:', () => {
  const progression = [4, 7, 10, 13, 16, 19, 22, 25, 28, 31];
  const { length } = progression;

  for (let i = 0; i < length; i += 1) {
    test(`getSkippedItem(${progression}, ${i}) === ${progression[i]}`, () => {
      expect(getSkippedItem({ progression, skipIndex: i }))
        .toBe(progression[i]);
    });
  }
});
