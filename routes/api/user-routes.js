const router = require('express').Router();
const { User } = require('../../models/user');
// const { Thought } = require('../../models/thought');
const { createMessage } = require('../../utils/createMessage');
const { getUnixTimestamp } = require('../../utils/dates');

router.get('/', async (req, res) => {
    try {
        const dbUsers = await User.find().select('-__v');

        res.json(dbUsers);
    } catch (err) {
        createMessage('Users Error', 'Cannot get the users...', 'User GET', err);

        res.status(500).json('NO DATA');
    }
});

router.post('/add', async (req, res) => {
    try {
        const timestamp = getUnixTimestamp();

        const username = req.body.username + timestamp;
        const email = timestamp + req.body.email;
        const dbUsers = await User.create({ username, email });

        createMessage('Adding User', 'The User ' + username + ' with the email ' + email + ' was added');

        res.status(201).json(dbUsers);

    } catch (err) {
        createMessage('Adding User Error', 'Cannot get the users...', 'User POST', err);

        res.status(500).json('Please, Try your request again, and if there is an issue contact the Developer.');
    }
});

router.get('/ping', (req, res) => {
    console.log('The user has user pinged');
    res.send('User Me To Ping');
});

module.exports = router;