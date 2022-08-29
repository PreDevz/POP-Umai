// Admin Dashboard Review routes

const auth = require('../../utils/auth');
const router = require('express').Router();

// import Review Model 
const Review = require('../../models/review');

// Get all Reviews 
router.get('/', auth, async (req, res) => {

})

// Find one Review by ID
router.get('/:id', auth, async (req, res) => {

})

// Delete a Review by ID 
router.delete('/:id', auth, async (req, res) => {

})
 
module.exports = router;