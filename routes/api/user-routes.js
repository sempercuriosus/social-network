const router = require('express').Router();
const { User } = require('../../models/user');
// const { Thought } = require('../../models/thought');
const { createMessage } = require('../../utils/createMessage');

router.get('/', (req, res) => {
    try {
        const dbUsers = User.find().select('-__v');

        res.json(dbUsers);
    } catch (err) {
        createMessage('Users Error', 'Cannot get the users...', 'User GET', err);

        res.status(500).json('NO DATA');
    }
});

router.post('/add', async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const dbUsers = await User.create({ username, email });

        createMessage('Adding User', 'The User ' + username + ' with the email ' + email + ' was added' + ' : --->' + dbUsers);

        res.status(201).json('add');
        // res.status(201).json(dbUsers);

    } catch (err) {
        createMessage('Adding User Error', 'Cannot get the users...', 'User POST', err);

        res.status(500).json('NO DATA');
    }
});

router.get('/ping', (req, res) => {
    console.log('The user has user pinged');
    res.send('User Me To Ping');
});

module.exports = router;