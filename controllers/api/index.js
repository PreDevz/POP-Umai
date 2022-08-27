// importing APIs 

const router = require('express').Router();

const adminEvents = require('./adminEvents');
const admin = require('./admin');

// Admin Dashboard Controller
// Events API 
router.use('/admin', admin);
router.use('/admin-event', adminEvents);

module.exports = router;