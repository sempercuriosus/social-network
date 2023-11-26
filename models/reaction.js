// Imports

const { Schema, Types } = require('mongoose');
const { formatTimestamp } = require('../utils/dates');

// Schema Create
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // want to avoid a virtal here, such that, I do NOT have to use a different field name at each implementation of the formatted date, and the get is called 
            get: function (toFormat) {
                return formatTimestamp('dmy', true);
            }
        }

    },
    {
        toJSON: {
            getters: true
        }, id: false
    }
);

// Assign the Model
// NOTE: The Challenge 18 dictates this is not a model, but to server as a subdoc to dictate the schema only


// Export
module.exports = reactionSchema;