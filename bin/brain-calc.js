#!/usr/bin/env node

import gameSession from '../src/index.js';
import calcRules from '../src/games/calc-rules.js';

const calcGameQuestion = 'What is the result of the expression?';

gameSession(calcGameQuestion, calcRules);
