const { Kafka } = require('kafkajs');

const kafka = new Kafka({ clientId: 'log-producer', brokers: ['localhost:9092'] });
const producer = kafka.producer();

const sendLog = async (log) => {
    await producer.connect();
    await producer.send({
        topic: 'logs',
        messages: [{ value: JSON.stringify(log) }],
    });
    await producer.disconnect();
};

module.exports = { sendLog };
