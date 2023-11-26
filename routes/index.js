const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('<h1>Route is not defined</h1>');
});

module.exports = router;
