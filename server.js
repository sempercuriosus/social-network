// Imports
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const { createMessage } = require('./utils/createMessage');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.on('error', () => {
    return createMessage('DB Connection Error', 'Could not connect to the database...', 'DB Connection - server', '', true);
});

db.once('open', () => {
    app.listen(PORT, () => {
        createMessage('DB Connection Established', 'Connected to the DB!', 'DB Connection - open', '');
    });
});
