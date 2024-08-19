const { spawn } = require('child_process');

const startServer = (scriptName, port) => {
    const server = spawn('node', [scriptName]);

    server.stdout.on('data', (data) => {
        console.log(`${scriptName} (port ${port}): ${data}`);
    });

    server.stderr.on('data', (data) => {
        console.error(`${scriptName} (port ${port}): ${data}`);
    });

    server.on('close', (code) => {
        console.log(`${scriptName} (port ${port}) exited with code ${code}`);
    });
};

startServer('loginServer.js', 3000);
startServer('profileServer.js', 3001);
startServer('settingsServer.js', 3002);
