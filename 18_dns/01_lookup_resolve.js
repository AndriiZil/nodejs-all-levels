const dns = require('node:dns');

dns.lookup('example.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family); // address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6
});

dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`); // addresses: ["207.241.224.2"]

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`); // reverse for 207.241.224.2: ["www.archive.org"]
    });
  });
});
