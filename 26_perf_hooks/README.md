# Що таке perf_hooks у Node.js?

## `perf_hooks` — це вбудований модуль Node.js, який забезпечує високоточне вимірювання продуктивності.

- Він заснований на Performance API, яка також існує в браузерах, але Node.js має додаткові можливості
  (наприклад, PerformanceObserver, performance.timerify, monitorEventLoopDelay).

### Використовується для:

- точного вимірювання часу виконання функцій, запитів, синхронних та асинхронних операцій;
- моніторингу Event Loop delay;
- створення власних performance marks/measurements;
- профілювання продуктивності API, мікросервісів, обчислювальних операцій;
- аналізу bottlenecks в CPU-bound і IO-bound коді.

### Основні частини API

1. `performance.now()`

- Повертає час із високою точністю.

2. Marks & Measures

- performance.mark('start')
- performance.mark('end')
- performance.measure('result', 'start', 'end')

3. `PerformanceObserver`

- Спостерігає за performance event’ами.

4. `performance.timerify(fn)`

- Автоматично заміряє функції.

5. `monitorEventLoopDelay()`

- Вимірює затримки Event Loop.
