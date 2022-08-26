// Admin Dashboard events routes 

const router = require('express').Router();

const adminEvents = require('./adminEvents');

router.use('/events', adminEvents);

module.exports = router;