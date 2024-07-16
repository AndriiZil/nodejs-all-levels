# Worker threads

- Node.js v10.5.0 introduced the experimental concept of Worker Threads via worker_threads module,
  which became a stable functionality since Node.js v12 LTS.

- Unlike child_process or cluster, worker_threads can share memory. They do so by transferring ArrayBuffer instances
  or sharing SharedArrayBuffer instances.

- `Worker, isMainThread, parentPort, workerData`
- `setEnvironmentData, getEnvironmentData`
- `worker.postMessage() port.postMessage({ foo: 'bar' });`
- `MessageChannel, receiveMessageOnPort, BroadcastChannel`
- `SHARE_ENV`

## Articles

- [Worker Threads : Multitasking in NodeJS](https://medium.com/@manikmudholkar831995/worker-threads-multitasking-in-nodejs-6028cdf35e9d)
