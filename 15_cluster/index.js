const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();

let numReqs = 0;

if (cluster.isMaster) {
  console.log(`Master "${process.pid}" is running`);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
      console.log(`Number of requests are: ${numReqs}`);
    }
  }

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

  cluster.on('listening', (worker, address) => {
    console.log(`A worker is now connected to ${address.address}:${address.port}`);
  });

  cluster.on('online', (worker) => {
    console.log(`Yay, the worker responded after it was forked "#${worker.id}"`);
  });

  cluster.on('exit', (worker, code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: "${signal}"`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: "${code}"`);
    } else {
      console.log('worker success!');
    }

    console.log('worker %d died (%s). restarting...', worker.process.pid, signal || code);
    cluster.fork();
  });

  cluster.on('disconnect', (worker) => {
    console.log(`The worker #${worker.id} "${worker.process.pid}" has disconnected`);
  });
} else if (cluster.isWorker) {
  // Workers can share any TCP connection
  // In this case it is an HTTP server

  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end('hello world\n');

      process.send({ cmd: 'notifyRequest' });
    })
    .listen(8000);

  console.log(`Worker "${process.pid}" started`);
}
