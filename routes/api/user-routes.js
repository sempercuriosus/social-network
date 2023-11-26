
// Imports
const router = require('express').Router();
const controller = require('../../controllers/user-controller');

// ALL Users
router.get('/', controller.getAllUsers);

// ONE (single) User 
router.get('/:userId', controller.getOneUser);

// Add a new user
router.post('/add', controller.newUser);

// Update User
router.put('/:userId', controller.updateUser);

// Delete User
router.delete('/:userId', controller.deleteUser);

// Ping Server Is Up
router.get('/ping', controller.userPing);

module.exports = router;