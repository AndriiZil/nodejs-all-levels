'use strict';

import test from 'node:test';
import assert from 'assert';

test('synchronous passing test', (t) => {
  assert.strictEqual(1, 1);
});

test('synchronous failing test', (t) => {
  assert.strictEqual(1, 2);
});

test('asynchronous passing test', async (t) => {
  assert.strictEqual(1, 1);
});

test('asynchronous failing test', async (t) => {
  assert.strictEqual(1, 2);
});

test('asynchronous tests', async (t) => {
  await t.test('passing test', (t) => {
    assert.strictEqual(1, 1);
  });

  await t.test('failing test', (t) => {
    assert.strictEqual(1, 2);
  });
});
