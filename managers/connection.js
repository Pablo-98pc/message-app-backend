const { Client } = require('pg');
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'MessageService',
    password: '1234',
    port: 5432,
}

function newClient() {
    return new Client (connectionData);
}

module.exports = newClient;