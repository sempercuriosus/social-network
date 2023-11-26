// setting up model entrypoint 

// require statement appears to be case sensitive...
// eg require('./User') is not importing.
const User = require('./user');
const Thought = require('./thought');


// named export
module.exports = { User, Thought };