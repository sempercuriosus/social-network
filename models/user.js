
/*
  * needs
  * username
  * email
  * thoughts
  * friends
  * virtual count of num of friends
*/

// Imports
const { Schema, model } = require('mongoose');

// Schema Create
const userSchema = new Schema(
    {
        username: {
            type: { String },
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: { String },
            required: true,
            unique: true,
            trim: true
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

// Custom Methods
userSchema.virtual('countAllFriends')
    .get(function () {
        const friendCount = this.friends.length;
        return friendCount;
    });

// Assign the Model
const User = model('User', userSchema);

// Export
module.exports = User;
