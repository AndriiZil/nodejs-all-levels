### Phases Overview

- `timers`: this phase executes callbacks scheduled by setTimeout() and setInterval().
- `pending` callbacks: executes I/O callbacks deferred to the next loop iteration.
- `idle`, prepare: only used internally.
- `poll`: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
- `check`: setImmediate() callbacks are invoked here.
- `close callbacks`: some close callbacks, e.g. socket.on('close', ...).

`pending callbacks`

- На этом этапе выполняется обратный вызов для некоторых системных операций, таких как типы ошибок TCP. Например,
  если сокет TCP получает ECONNREFUSED при попытке подключения, некоторые системы \*nix хотят подождать,
  чтобы сообщить об ошибке. Это будет поставлено в очередь для выполнения на этапе ожидания обратных вызовов.
  `poll`
- Фаза опроса выполняет две основные функции:
  Вычисляя, как долго он должен блокировать и опрашивать ввод-вывод, затем обработка событий в очереди опроса.
  Когда цикл событий переходит в фазу опроса, а таймеры не запланированы, произойдет одно из двух:
  Если очередь опроса не пуста, цикл обработки событий будет перебирать свою очередь обратных вызовов, выполняя их синхронно,
  пока либо очередь не будет исчерпана, либо не будет достигнут системно-зависимый жесткий предел.
  Если очередь опроса пуста, произойдет еще одно из двух:
  Если сценарии были запланированы с помощью setImmediate(), цикл событий завершит фазу опроса и перейдет к фазе проверки
  для выполнения этих запланированных сценариев
  Если сценарии не были запланированы с помощью setImmediate(), цикл обработки событий будет ждать, пока обратные вызовы
  будут добавлены в очередь, а затем немедленно их выполнит.
  Как только очередь опроса опустеет, цикл обработки событий будет проверять таймеры, временные пороги которых были достигнуты.
  Если один или несколько таймеров готовы, цикл событий вернется к фазе таймеров для выполнения обратных вызовов этих таймеров.
  `close callbacks`
- Если сокет или дескриптор неожиданно закрыты (например, socket.destroy()), на этой фазе будет выпущено событие «закрыть».
  В противном случае он будет издаваться через process.nextTick()

`microTasks & macroTasks`

- Common `Macro-Tasks` are setTimeout, setInterval, and setImmediate.
- Common `Micro-Task` are process.nextTick and Promise callback.

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
