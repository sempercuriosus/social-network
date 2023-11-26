// Imports
const { User } = require('../models/user');
const { createMessage } = require('../utils/createMessage');
const { getUnixTimestamp } = require('../utils/dates');

const userController = {

    // #region GET ROUTES

    /* All GET HTTP Method Routes */

    // Ping Server Is Up
    userPing (req, res) {
        // userPing('/ping', (req, res) => {
        console.log('The user has user pinged');
        res.send('User Me To Ping');
    },

    // ALL users
    async getAllUsers (req, res) {
        try {
            const allUsers = await User.find().select('-__v');

            res.status(200).json(allUsers);
        } catch (err) {
            createMessage('Users Error', 'Cannot get the users...', 'getAllUsers', err);

            res.status(500).json('NO DATA');
        }
    },

    // ONE users
    async getOneUser (req, res) {
        try {
            const userId = req.params.userId;

            if (!userId) {
                // this really would not ever happen. without the param, the route would end up being `users/` returning all users, which is fine 
                return res.status(400).json('You must supply the userId to find a single user.');
            }

            const singleUser = await User.find()
                .select('-__v')
                .where({ _id: userId })
                .populate('friends')
                .populate('thoughts');

            if (!singleUser || singleUser.length === 0) {
                // not sure why this returns an empty array and the other returns null
                return res.status(404).json('The user with the userId ' + userId + ' was not found.');
            }

            res.status(200).json(singleUser);
        } catch (err) {
            createMessage('Users Error', 'Cannot get the user...', 'getOneUser', err);

            res.status(500).json('NO DATA');
        }
    },

    // #endregion GET ROUTES

    // #region POST ROUTES

    /* All POST HTTP Method Routes */

    // add a new user
    async newUser (req, res) {
        try {
            // const timestamp = getUnixTimestamp();

            const username = req.body.username;
            const email = req.body.email;

            if (!username || !email) {
                return res.status(400).json('You must supply the username and email address to add a user.');
            }

            const singleUser = await User.create({ username, email });

            createMessage('Adding User', 'The User ' + username + ' with the email ' + email + ' was added');

            res.status(201).json(singleUser);

        } catch (err) {
            createMessage('Adding User Error', 'Cannot get the users...', 'newUser', err);

            res.status(500).json('Please, Try your request again, and if there is an issue contact the Developer.');
        }
    },

    // #endregion POST ROUTES

    // #region PUT ROUTES

    /* All PUT HTTP Method Routes */

    // Update User
    async updateUser (req, res) {

        const userId = req.params.userId;
        const usernameUpdate = req.body.username;
        const emailUpdate = req.body.email;

        if (!userId || !usernameUpdate || !emailUpdate) {
            return res.status(400).json('You must supply the userId, username, and email address to update.');
        }

        try {
            const userToUpdate = await User.findOneAndUpdate({ _id: userId }, { username: usernameUpdate, email: emailUpdate }, { new: true });

            res.status(201).json(userToUpdate);
        } catch (err) {
            createMessage('Update User Error', 'There was an error when attempting to update the user: ' + userId, 'updateUser', err);

            res.status(500).json('NO DATA');
        }
    },

    // #endregion PUT ROUTES    

    // #region DELETE ROUTES

    /* All DELETE HTTP Method Routes */

    async deleteUser (req, res) {

        const userId = req.params.userId;

        if (!userId) {
            return res.status(400).json('You must supply the userId to delete the user.');
        }

        try {
            const userToDelete = await User.findOneAndDelete({ _id: userId });

            // Assuming that the userToDelete being null/not existing means the user was also not found
            if (!userToDelete) {
                return res.status(404).json('The user was not found.');
            }

            res.status(204).json(userToDelete);
        } catch (err) {
            createMessage('Delete User Error', 'There was an error when deleting the user: ' + userId, 'deleteUser', err);

            res.status(500).json('NO DATA');
        }
    }

    // #endregion DELETE ROUTES

};

module.exports = userController;