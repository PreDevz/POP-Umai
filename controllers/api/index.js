// importing APIs 

const router = require('express').Router();

const adminVerify = require('./adminRoutes')
const adminEvents = require('./adminEvents');

// Admin Dashboard Controller
// Events API 
router.use('/verify', adminVerify)
router.use('/event', adminEvents);

module.exports = router;