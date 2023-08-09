import readlineSync from 'readline-sync';

import config from './config.js';

const { MESSAGES } = config;

const introduction = () => {
  console.log(MESSAGES.intro);
  const userName = readlineSync.question(MESSAGES.askUserName);
  console.log(MESSAGES.greetings(userName));
};

export default introduction;
