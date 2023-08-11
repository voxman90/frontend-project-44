#!/usr/bin/env node

import gameEngine from '../src/index.js';
import primeRules from '../src/games/prime-rules.js';

const primeGameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameEngine(primeGameQuestion, primeRules);
