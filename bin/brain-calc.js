#!/usr/bin/env node

import gameEngine from '../src/index.js';
import calcRules from '../src/games/calc-rules.js';

const calcGameQuestion = 'What is the result of the expression?';

gameEngine(calcGameQuestion, calcRules);
