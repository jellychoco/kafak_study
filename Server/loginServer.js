const express = require('express');
const { sendLog } = require('./kafkaProducer');

const app = express();
app.use(express.json());

const generateLoginLog = async () => {
    const log = {
        type: 'LOGIN',
        message: `User user1 logged in`,
        timestamp: new Date().toISOString(),
    };
    await sendLog(log);
    console.log('Login log sent');
};

setInterval(generateLoginLog, 10000);

app.listen(3000, () => console.log('Login log server running on port 3000'));
