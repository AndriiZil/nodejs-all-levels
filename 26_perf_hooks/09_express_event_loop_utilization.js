'use strict';

const { eventLoopUtilization } = require('perf_hooks').performance;
const { spawnSync } = require('child_process');

setImmediate(() => {
  const elu = eventLoopUtilization();
  // spawnSync('sleep', ['3']);
  console.log(eventLoopUtilization(elu).utilization);
});
