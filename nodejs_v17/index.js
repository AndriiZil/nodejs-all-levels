import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

async function start() {
  try {
    const rl = readline.createInterface({ input, output });

    const name = await rl.question('What is your name? ');
    console.log(`Hello, ${name}!`);

    const answer = await rl.question('What do you think of Node 17? ');
    console.log(`Cool, ${name} thinks it is ${answer}!`);

    rl.close();
  } catch (err) {
    console.log(err);
  }
}

start().then(console.log).catch(console.error);
