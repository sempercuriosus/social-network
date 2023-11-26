const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const pong = require('./pong');

router.get('/ping', pong);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
