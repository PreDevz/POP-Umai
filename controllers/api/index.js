// Admin Dashboard Controller
 
const router = require('express').Router();

// importing APIs 
const adminEvents = require('./adminEvents');
const adminReviews = require('./adminReviews');
const admin = require('./admin');

// Event APIs 
router.use('/admin', admin);
router.use('/admin-event', adminEvents);

// Review APIs
router.use('/admin-review', adminEvents);

module.exports = router;