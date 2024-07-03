# Child Processes

- `spawn()` The spawn function is a much better choice when the size of the data expected from the command is large,
  because that data will be streamed with the standard IO objects. One last important child process option to explain
  here is the detached option, which makes the child process run independently of its parent process.

- `fork()` The fork function is a variation of the spawn function for spawning node processes.
  The biggest difference between spawn and fork is that a communication channel is established to the child process
  when using fork, so we can use the send function on the forked process along with the global process object itself
  to exchange messages between the parent and forked processes. We do this through the EventEmitter module interface.

- `exec()` The exec function is a good choice if you need to use the shell syntax and if the size of the data expected from
  the command is small. (Remember, exec will buffer the whole data in memory before returning it.)

- `execFile()` If you need to execute a file without using a shell, the execFile function is what you need.
  It behaves exactly like the exec function, but does not use a shell, which makes it a bit more efficient.
  On Windows, some files cannot be executed on their own, like .bat or .cmd files. Those files cannot be executed with
  execFile and either exec or spawn with shell set to true is required to execute them.
