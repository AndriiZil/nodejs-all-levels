'use strict';

const { test, mock } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');

mock.method(fs, 'readFile', async () => 'Hello World');

test('synchronous passing test', async () => {
  assert.strictEqual(await fs.readFile('a.txt'), 'Hello World');
});
