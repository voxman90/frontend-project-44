#!/usr/bin/env node

import gameSession from '../src/index.js';
import progressionRules from '../src/games/progression-rules.js';

const progressionGameQuestion = 'What number is missing in the progression?';

gameSession(progressionGameQuestion, progressionRules);
