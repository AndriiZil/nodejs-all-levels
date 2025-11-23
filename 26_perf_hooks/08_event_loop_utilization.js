const { eventLoopUtilization } = require('perf_hooks').performance;

let previous = eventLoopUtilization();

setInterval(() => {
  const current = eventLoopUtilization();
  const delta = eventLoopUtilization(current, previous);
  previous = current;

  console.log(delta.utilization);

  if (delta.utilization > 0.6) {
    console.warn(`[WARN] High event loop utilization: ${delta.utilization}`);
  }
}, 1000);
