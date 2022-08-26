// importing APIs 

const router = require('express').Router();

const adminEvents = require('./adminEvents');

// Admin Dashboard Controller 
// Events API 
router.use('/events', adminEvents);

module.exports = router;