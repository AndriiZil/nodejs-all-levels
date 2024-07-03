# Worker threads

- Unlike child_process or cluster, worker_threads can share memory. They do so by transferring ArrayBuffer instances
  or sharing SharedArrayBuffer instances.

- `Worker, isMainThread, parentPort, workerData`
- `setEnvironmentData, getEnvironmentData`
- `worker.postMessage() port.postMessage({ foo: 'bar' });`
- `MessageChannel, receiveMessageOnPort, BroadcastChannel`
- `SHARE_ENV`
