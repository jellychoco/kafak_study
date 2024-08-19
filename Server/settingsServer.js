const express = require('express');
const { sendLog } = require('./kafkaProducer');

const app = express();
app.use(express.json());

const generateSettingsLog = async () => {
    const log = {
        type: 'SETTINGS_CHANGE',
        message: `User user1 turned notifications off`,
        timestamp: new Date().toISOString(),
    };
    await sendLog(log);
    console.log('Settings change log sent');
};

setInterval(generateSettingsLog, 20000);

app.listen(3002, () => console.log('Settings log server running on port 3002'));
