import { describe, expect, test } from '@jest/globals';

import {
  PROGRESSION_SKIP_MARK as MARK,
  PROGRESSION_SEPARATOR as WS,
  stringifyProgression,
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
