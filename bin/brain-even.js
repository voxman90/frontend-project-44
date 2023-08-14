#!/usr/bin/env node

import gameSession from '../src/index.js';
import evenRules from '../src/games/even-rules.js';

const evenGameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

gameSession(evenGameQuestion, evenRules);
