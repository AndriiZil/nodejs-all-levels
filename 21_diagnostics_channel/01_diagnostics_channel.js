'use strict';

const diagnostics_channel = require('node:diagnostics_channel');

// Get a reusable channel object
const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  console.log({ message, name }); // { message: { some: 'data' }, name: 'my-channel' }
}

// Subscribe to the channel
diagnostics_channel.subscribe('my-channel', onMessage);

// Check if the channel has an active subscriber
if (channel.hasSubscribers) {
  // Publish data to the channel
  console.log({ channel });
  /**
   * {
   *   channel: ActiveChannel {
   *     _subscribers: [ [Function: onMessage] ],
   *     _stores: SafeMap(0) [Map] {},
   *     name: 'my-channel'
   *   }
   * }
   */

  channel.publish({
    some: 'data',
  });
}

// Unsubscribe from the channel
diagnostics_channel.unsubscribe('my-channel', onMessage);
