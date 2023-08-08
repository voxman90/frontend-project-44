#!/usr/bin/env node

import gameEngine from '../src/index.js';
import calcRules from '../games/calc-rules.js';

(() => {
  gameEngine(calcRules);
})();
