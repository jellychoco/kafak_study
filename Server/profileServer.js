const express = require('express');
const { sendLog } = require('./kafkaProducer');

const app = express();
app.use(express.json());

const generateProfileLog = async () => {
    const log = {
        type: 'PROFILE_UPDATE',
        message: `User user1 updated their profile`,
        timestamp: new Date().toISOString(),
    };
    await sendLog(log);
    console.log('Profile update log sent');
};

setInterval(generateProfileLog, 15000);

app.listen(3001, () => console.log('Profile log server running on port 3001'));
