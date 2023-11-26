// Imports

const { Schema, Types, model } = require('mongoose');
const dateFormat = require('../utils/dates');

// Schema Create
const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        recationBody: {
            type: { String },
            required: true,
            // this was not specified, however, the body itself is required
            minLength: 1,
            maxLength: 280
        },
        username: {
            type: { String },
            required: true
        },
        createdAt: {
            type: { Date },
            default: Date.now,
            // want to avoid a virtal here, such that, I do NOT have to use a different field name at each implementation of the formatted date, and the get is called 
            get: function (toFormat) {
                return formatDate(toFormat);
            }
        }

    },
    {
        toJSON: {
            getters: true
        }, id: false
    }
);

// Custom Methods


// Assign the Model
// NOTE: The Challenge 18 dictates this is not a model, but to server as a subdoc to dictate the schema only


// Export
model.exports = reactionSchema;