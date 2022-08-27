// importing APIs 

const router = require('express').Router();

const admin = require('./admin');
const adminEvents = require('./adminEvents');

// Admin Dashboard Controller
// Events API 
router.use('/admin', admin);
router.use('/admin-event', adminEvents);

module.exports = router;