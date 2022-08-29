// Admin Dashboard Controller
 
const router = require('express').Router();

// importing APIs 
const admin = require('./admin');
const adminEvents = require('./adminEvents');
const adminReviews = require('./adminReviews');

// Using APIs

// Admin routes 
router.use('/admin', admin); 
// Admin Event routes 
router.use('/admin-event', adminEvents); 
// Admin Review routes
router.use('/admin-review', adminReviews); 

module.exports = router;