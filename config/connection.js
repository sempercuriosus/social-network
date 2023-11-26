const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/socialmediadb';

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
