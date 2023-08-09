import { describe, test, expect } from '@jest/globals';

import { generatePair, stringifyPair, getGCD } from '../games/gcd-rules.js';

describe('Test generatePair:', () => {
  test('generatePair() === { a, b }', () => {
    const { a, b } = generatePair();
    expect(a).not.toBe(undefined);
    expect(b).not.toBe(undefined);
  });
});

describe('Test stringifyPair:', () => {
  test('stringifyPair({ a, b }) === \'a b\'', () => {
    expect(stringifyPair({ a: 0, b: 1 })).toBe('0 1');
    expect(stringifyPair({ a: 1, b: 0 })).toBe('1 0');
  });
});

describe('Test getGCD:', () => {
  test('getGCD({ a, b }) === getGCD({ b, a })', () => {
    expect(getGCD({ a: 71, b: 83 })).toBe(getGCD({ a: 83, b: 71 }));
  });

  test('getGCD({ a, b }) === 1 | prime(a) && prime(b)', () => {
    expect(getGCD({ a: 71, b: 83 })).toBe(1);
    expect(getGCD({ a: 3, b: 2 })).toBe(1);
    expect(getGCD({ a: 7, b: 213 })).toBe(1);
  });

  test('getGCD({ a, a }) === a', () => {
    const a = 13 ** 2 * 4 ** 2;
    expect(getGCD({ a, b: a })).toBe(a);
  });

  test('getGCD({ a, b }) === (a, b)', () => {
    const gcd = 2 * 3 ** 2 * 5 * 7;
    const a = gcd * 71;
    const b = gcd * 119;
    expect(getGCD({ a, b })).toBe(gcd);
  });
});
