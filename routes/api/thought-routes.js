const router = require('express').Router();

router.get('/ping', (req, res) => {
    console.log('The user has thought pinged');
    res.send('Thoughts for Your Thoughts');
});

module.exports = router;