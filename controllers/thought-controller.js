// Imports
const { Thought } = require('../models/thought');
const { User } = require('../models/user');
const { createMessage } = require('../utils/createMessage');
const { formatTimestamp } = require('../utils/dates');

const thoughtController = {

    // #region GET ROUTES

    /* All GET HTTP Method Routes */

    // Ping Server Is Up
    thoughtPing (req, res) {
        console.log('The user has thought-pinged');
        res.status(200).send('Thoughts for Your Thoughts');
    },

    // ALL thoughts
    async getAllThoughts (req, res) {
        try {
            const allThoughts = await Thought.find().select('-__v');

            res.status(200).json(allThoughts);
        } catch (err) {
            createMessage('Thoughts Error', 'Cannot get the Thoughts...', 'getAllThoughts', err);

            res.status(500).json({ "response": 'NO DATA' });
        }
    },

    // ONE thought
    async getOneThought (req, res) {
        try {
            const thoughtId = req.params.thoughtId;

            if (!thoughtId) {
                // this really would not ever happen. without the param, the route would end up being `thoughts/` returning all thoughts, which is fine 
                return res.status(400).json({ "response": 'You must supply the thoughtId to find a single thought.' });
            }

            const singleThought = await Thought.find()
                .select('-__v')
                .where({ _id: thoughtId });

            res.status(200).json(singleThought);

        } catch (err) {
            createMessage('Thought Error', 'Cannot get the user...', 'getOneThought', err);

            res.status(500).json({ "response": 'NO DATA' });
        }
    },

    // #endregion GET ROUTES

    // #region POST ROUTES

    /* All POST HTTP Method Routes */

    // add a new thought
    async newThought (req, res) {
        try {
            const userId = req.body.userId;
            const thoughtText = req.body.thoughtText;

            if (!userId || !thoughtText) {
                return res.status(400).json({ "response": 'You must supply the user id, username, and thought text to add a thought.' });
            }

            const user = await User.findById({ _id: userId }).select('username');
            const username = user.username.toString();

            console.log('userId:', userId);
            console.log('username:', username);
            console.log('thoughtText:', thoughtText);

            const singleThought = await Thought.create({ userId, username, thoughtText });

            createMessage('Adding Thought', 'The User Id: (' + userId + ')  added the thought ' + thoughtText);

            const userThought = await User.findOneAndUpdate(
                { _id: userId },
                { $push: { thoughts: singleThought } },
                { new: true }
            );

            res.status(201).json(userThought);

        } catch (err) {
            createMessage('Adding Thought Error', 'Cannot add the new thought...', 'newThought', err);

            res.status(500).json({ "response": 'Please, Try your request again, and if there is an issue contact the Developer.' });
        }
    },

    // Add Reaction to a thought
    async addReaction (req, res) {
        const thoughtId = req.params.thoughtId;
        const username = req.body.username;
        const reactionBody = req.body.reactionBody;

        if (!thoughtId || !reactionBody || !username) {
            return res.status(400).json({ "response": 'You must supply the thoughtId, reactionBody, and username to add a reaction to a thought.' });
        }

        const reaction = await Thought.findOneAndUpdate({ _id: thoughtId }, { $addToSet: { reactions: { username, reactionBody } } }, { new: true });

        if (!reaction) {
            return res.status(404).json({ "response": 'Thought was not found' });
        }

        res.status(200).json(reaction);
    },


    // #endregion POST ROUTES

    // #region PUT ROUTES

    /* All PUT HTTP Method Routes */

    // Update User
    async updateThought (req, res) {

        const thoughtId = req.params.thoughtId;
        const thoughtTextUpdated = req.body.thoughtText;

        if (!thoughtId || !thoughtTextUpdated) {
            return res.status(400).json({ "response": 'You must supply the thoughtId and thought text to update.' });
        }

        const editDate = formatTimestamp('dmy', true);

        try {
            // append '(edited)' to the updated thought
            const thoughtToUpdate = await Thought.findOneAndUpdate({ _id: thoughtId }, { thoughtText: ' ' + '(edited on ' + editDate + ') ' + thoughtTextUpdated }, { new: true });

            if (thoughtToUpdate === null) {
                return res.status(404).json({ "response": 'Thought was not found.' });
            }

            res.status(201).json(thoughtToUpdate);
        } catch (err) {
            createMessage('Update Thought Error', 'There was an error when attempting to update the thought: ' + thoughtId, 'updateThought', err);

            res.status(500).json({ "response": 'NO DATA' });
        }
    },

    // #endregion PUT ROUTES    

    // #region DELETE ROUTES

    /* All DELETE HTTP Method Routes */

    async deleteThought (req, res) {

        const thoughtId = req.params.thoughtId;

        if (!thoughtId) {
            return res.status(400).json({ "response": 'You must supply the thoughtId to delete the thought.' });
        }

        try {
            const thoughtToDelete = await Thought.findOneAndDelete({ _id: thoughtId });

            // Assuming that the thoughtToDelete being null/not existing means the thought was also not found
            if (!thoughtToDelete) {
                return res.status(404).json({ "response": 'The thought was not found.' });
            }

            res.status(204).json(thoughtToDelete);
        } catch (err) {
            createMessage('Delete Thought Error', 'There was an error when deleting the thought: ' + thoughtId, 'deleteThought', err);

            res.status(500).json({ "response": 'NO DATA' });
        }
    },

    async deleteReaction (req, res) {
        const thoughtId = req.params.thoughtId;
        const reactionToRemove = req.params.reactionId;

        if (!reactionToRemove || !thoughtId) {
            return res.status(400).json({ "response": 'You must supply the Reaction Id and Thought Id to remove the reaction.' });
        }

        const singleReaction = await Thought.findOneAndUpdate(
            { _id: thoughtId },
            { $pull: { reactions: { reactionId: reactionToRemove } } },
            { runValidators: true, new: true }
        );

        if (!singleReaction) {
            return res.status(404).json({ "response": 'Reaction was not found' });
        }

        res.status(200).json(singleReaction);
    }

    // #endregion DELETE ROUTES

};

module.exports = thoughtController;