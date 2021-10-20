const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const entryRoutes = require('./controllers/diary')
server.use('/entries', entryRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, user!'))

module.exports = server