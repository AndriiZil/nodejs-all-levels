const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family); // addresses: ["207.241.224.2"]
});

dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`); // address: "216.58.212.174" family: IPv4

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) {
                throw err;
            }
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`); // reverse for 207.241.224.2: ["www.archive.org"]
        });
    });
});
