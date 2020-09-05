const Client = require('./Structures/GreezyClient');
const config = require('../config.json');

const client = new Client(config);
client.start();

client.on('warn', () => console.warn);
client.on('error', () => console.error);