# Cluster

- The cluster module allows easy creation of child processes that all share server ports.

- The cluster module supports two methods of distributing incoming connections.

1. The first one (and the default one on all platforms except Windows) is the round-robin approach,
   where the primary process listens on a port, accepts new connections and distributes them across the workers
   in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
2. The second approach is where the primary process creates the listen socket and sends it to interested workers.
   The workers then accept incoming connections directly.
