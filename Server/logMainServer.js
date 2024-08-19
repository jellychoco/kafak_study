const express = require('express');
const { Kafka } = require('kafkajs');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://127.0.0.1:5500',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
    },
});

const kafka = new Kafka({ clientId: 'log-consumer', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'log-group' });

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'logs', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const log = JSON.parse(message.value.toString());

            io.emit('log', log);
        },
    });
};

runConsumer().catch(console.error);

io.on('connection', (socket) => {
    console.log('New client connected');
});

server.listen(4000, () => console.log('Log UI server running on port 4000'));
