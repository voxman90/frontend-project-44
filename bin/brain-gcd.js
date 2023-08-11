#!/usr/bin/env node

import gameEngine from '../src/index.js';
import gcdRules from '../src/games/gcd-rules.js';

const gcdGameQuesqtion = 'Find the greatest common divisor of given numbers.';

gameEngine(gcdGameQuesqtion, gcdRules);
