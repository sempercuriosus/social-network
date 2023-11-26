
// Imports
const router = require('express').Router();
const users = require('../../controllers/user-controller');


// ALL Users
router.get('/', users.getAllUsers);

// Ping Server Is Up
router.get('/ping', users.userPing);

// ONE (single) User 
router.get('/:userId', users.getOneUser);

// Add a new user
router.post('/add', users.newUser);

// Update User
router.put('/:userId', users.updateUser);

// Delete User
router.delete('/:userId', users.deleteUser);

// Add Friend
router.post('/:userId/friends/:friendId', users.addFriend);

// Delete Friend
router.delete('/:userId/friends/:friendId', users.deleteFriend);

module.exports = router;