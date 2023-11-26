
// Imports
const router = require('express').Router();
const thoughts = require('../../controllers/thought-controller');

// ALL Thoughts
router.get('/', thoughts.getAllThoughts);

// Ping Server Is Up
router.get('/ping', thoughts.thoughtPing);

// ONE (single) Thought 
router.get('/:thoughtId', thoughts.getOneThought);

// Add a new Thought
router.post('/add', thoughts.newThought);

// Update Thought
router.put('/:thoughtId', thoughts.updateThought);

// Delete Thought
router.delete('/:thoughtId', thoughts.deleteThought);


module.exports = router;