#!/usr/bin/env node

import gameEngine from '../src/index.js';
import evenRules from '../src/games/even-rules.js';

const evenGameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

gameEngine(evenGameQuestion, evenRules);
