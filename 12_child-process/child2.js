console.log(`Child process is running`);

process.on('message', (message) =>
    console.log('Message to child: ', message)
)

process.send({ data: 'Ping parent' });

process.exit();
