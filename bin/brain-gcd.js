#!/usr/bin/env node

import gameSession from '../src/index.js';
import gcdRules from '../src/games/gcd-rules.js';

const gcdGameQuestion = 'Find the greatest common divisor of given numbers.';

gameSession(gcdGameQuestion, gcdRules);
