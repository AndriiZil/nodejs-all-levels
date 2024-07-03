# Diagnostic Channel

- The node:diagnostics_channel module provides an API to create named channels to report arbitrary message data for diagnostics purposes.

- `diagnostics_channel.hasSubscribers(name)`
- `diagnostics_channel.channel(name)`
- `diagnostics_channel.subscribe(name, onMessage)`
- `diagnostics_channel.unsubscribe(name, onMessage)`
