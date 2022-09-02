'use strict';

const TicketManager = require('./ticketManager.js');

const ticketManager = new TicketManager(10);

ticketManager.on('buy', (email, price, date) => {
  console.log('Someone bought a ticket');
});

ticketManager.once("buy", () => {
  console.log("This is only called once");
});

ticketManager.buy('test@gmail.com', 20);
ticketManager.buy('test@gmail.com', 20);
