import { describe, test, expect } from '@jest/globals';

import { isPrime } from '../src/games/prime-rules.js';

describe('Test isPrimal:', () => {
  const primeNumbers = [
    2, 3, 5, 7, 11,
    13, 17, 19, 23, 29,
    31, 37, 41, 43, 47,
  ];
  const nonPrimeNumbers = [
    1, 4, 6, 8, 9, 10, 12, 14, 15, 16,
    18, 20, 21, 22, 24, 25, 26, 27, 28,
    30, 32, 33, 34, 35, 36, 38, 39, 40,
  ];

  test('isPrime(n) => true | prime(n)', () => {
    expect(primeNumbers.every(isPrime)).toBe(true);
  });

  test('isPrime(n) => false | not prime(n)', () => {
    expect(nonPrimeNumbers.some(isPrime)).toBe(false);
  });
});
