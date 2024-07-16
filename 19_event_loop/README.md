### Phases Overview

- Event loop phases:

```bash
     ┌───────────────────────────┐
 ┌─> │           timers          │
  │  └─────────────┬─────────────┘
  │  ┌─────────────┴─────────────┐
  │  │     pending callbacks     │
  │  └─────────────┬─────────────┘
  │  ┌─────────────┴─────────────┐
  │  │       idle, prepare       │
  │  └─────────────┬─────────────┘      ┌───────────────┐
  │  ┌─────────────┴─────────────┐      │   incoming:   │
  │  │           poll            │<─────┤  connections, │
  │  └─────────────┬─────────────┘      │   data, etc.  │
  │  ┌─────────────┴─────────────┐      └───────────────┘
  │  │           check           │
  │  └─────────────┬─────────────┘
  │  ┌─────────────┴─────────────┐
  └──┤      close callbacks      │
     └───────────────────────────┘
```

- `timers`: this phase executes callbacks scheduled by setTimeout() and setInterval().
- `pending callbacks`: executes I/O callbacks deferred to the next loop iteration.
- `idle`, prepare: only used internally.
- `poll`: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks,
  the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- `check`: setImmediate() callbacks are invoked here.
- `close callbacks`: some close callbacks, e.g. socket.on('close', ...).

1. `timers`

- A timer specifies the threshold after which a provided callback may be executed rather than the exact time a
  person wants it to be executed. Timers callbacks will run as early as they can be scheduled after the specified
  amount of time has passed; however, Operating System scheduling or the running of other callbacks may delay them.

2. `pending callbacks`

- This phase executes callbacks for some system operations such as types of `TCP` errors. For example if a TCP socket
  receives ECONNREFUSED when attempting to connect, some \*nix systems want to wait to report the error.
  This will be queued to execute in the pending callbacks phase.

4. `poll`

- Calculating how long it should block and poll for I/O, then Processing events in the poll queue.
- If the poll queue is not empty, the event loop will iterate through its queue of callbacks executing
  them synchronously until either the queue has been exhausted, or the system-dependent hard limit is reached.
- If the poll queue is empty, one of two more things will happen:
  If scripts have been scheduled by setImmediate(), the event loop will end the poll phase and continue to the check phase
  to execute those scheduled scripts. If scripts have not been scheduled by setImmediate(), the event loop will wait for
  callbacks to be added to the queue, then execute them immediately.

5. `check`

- setImmediate() is actually a special timer that runs in a separate phase of the event loop. It uses a `libuv API`
  that schedules callbacks to execute after the poll phase has completed.
- The main advantage to using `setImmediate()` over `setTimeout()` is `setImmediate()` will always be executed before any timers
  if scheduled within an I/O cycle, independently of how many timers are present.

6. `close callbacks`

- If a socket or handle is closed abruptly (e.g. socket.destroy()), the 'close' event will be emitted in this phase.
  Otherwise it will be emitted via process.nextTick().

- Between each run of the event loop, Node.js checks if it is waiting for any asynchronous I/O or timers and shuts
  down cleanly if there are not any.

- Common `Micro-Task` are process.nextTick and Promise callback. Has higher priority
- Common `Macro-Tasks` are setTimeout, setInterval, and setImmediate.

```
  Step 1: The event loop updates the loop time to the current time for the current execution.
  Step 2: Micro-Queue is executed.
  Step 3: A task from the Timers phase is executed.
  Step 4: Checking if there is something in the Micro-Queue and executes the whole Micro-Queue if there is something.
  Step 5: Returns to Step 3 until the Timers phase is empty.
  Step 6: A task from the Pending Callbacks phase is executed.
  Step 7: Checking if there is something in the Micro-Queue and executes the whole Micro-Queue if there is something.
  Step 8: Returns to Step 6 until the Pending Callbacks phase is empty.

  And then Idle… Micro-Queue … Poll … Micro-Queue … Check … Micro-Queue … Close CallBacks and then it starts over.
```
