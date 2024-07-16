const fs = require('node:fs');

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

/**
 * 102ms have passed since I was scheduled
 */
