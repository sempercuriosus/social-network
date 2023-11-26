
/*
  * needs
  * thoughtText between 1-280 chars
  * createdAt date default current time (format with getter)
  * username string
  * countAllReactions virtual
*/

// Imports
const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const formatDate = require('../utils/dates');

// Schema Create
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: { String },
            required: true,
            minLength: 1,
            maxLength: 280
            // is this inclusive or exclusive on the length?
        },
        createdAt: {
            type: { Date },
            default: Date.now,
            // want to avoid a virtal here, such that, I do NOT have to use a different field name at each implementation of the formatted date, and the get is called 
            get: function (toFormat) {
                return formatDate(toFormat);
            }
        },
        username: {
            type: { String },
            required: true,
            reactions: [ reactionSchema ]
        }
    },
    {
        toJSON: {
            getters: true
        }
        , id: false
    }
);

// Custom Methods
thoughtSchema.virtual('countAllReactions')
    .get(function () {
        const reactionCount = this.reactions.length;
        return reactionCount;
    });


// Assign the Model
const Thoughts = model('Thought', thoughtSchema);

// Export
module.exports = Thoughts;