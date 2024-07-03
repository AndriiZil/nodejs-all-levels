const ns2ms = (ns) => ns * 1000000;

let startTime = process.hrtime();
let startCpuUsage = process.cpuUsage();

for (let i = 0; i < 10000000000; i++);

let diffTime = process.hrtime(startTime);
let diffUsage = process.cpuUsage(startCpuUsage);

let diffTimeMs = diffTime[1] * 1000 + ns2ms(diffTime[1]);
let diffUsageUserMs = ns2ms(diffUsage.user);
let diffUsageSystemMS = ns2ms(diffUsage.system);
let cpuUsage = Math.round((100 * (diffUsageUserMs + diffUsageSystemMS)) / diffTimeMs);

console.log('CPU usage, %: ', cpuUsage);
