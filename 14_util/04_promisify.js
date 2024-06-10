'use strict';

const util = require('node:util');
const fs = require('node:fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.'); // This directory is owned by 501
  console.log(`This directory is owned by ${stats.uid}`);
  return 'done';
}

callStat().then(console.log); // done
