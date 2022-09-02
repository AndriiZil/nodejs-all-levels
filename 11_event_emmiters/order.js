const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('order', (itemNo) => {
  console.log(`an order has been placed on item ${itemNo}`);
});

myEmitter.on('checkout', () => {
  console.log('payment has been made');
});

myEmitter.emit('order', 10);
myEmitter.emit('checkout');
