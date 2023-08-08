#!/usr/bin/env node

import gameEngine from '../src/index.js';
import gcdRules from '../games/gcd-rules.js';

(() => {
  gameEngine(gcdRules);
})();
