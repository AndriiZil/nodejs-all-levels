'use strict';

const { performance } = require('perf_hooks');

function generatePDF() {
  for (let i = 0; i < 10000000000; i++) {}
}

performance.mark('pdf-start');

generatePDF();

performance.mark('pdf-end');

const { duration } = performance.measure('pdf-time', 'pdf-start', 'pdf-end');

console.log(`PDF generation: ${duration.toFixed(2)}ms`);
