// Page imports 
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');
const eventRoutes = require('./eventRoutes');
const cookieRoutes = require('./cookieRoutes');
const contactRoutes = require('./contactRoutes');
const aboutRoutes = require('./aboutRoutes');

// API imports 
const apiRoutes = require('./api')

// page routes 
router.use('/', homeRoutes);
router.use('/admin', adminRoutes);
router.use('/events', eventRoutes);
router.use('/cookies', cookieRoutes);
router.use('/contact-us', contactRoutes);
router.use('/about', aboutRoutes);

// api routes 
router.use('/api', apiRoutes)

module.exports = router;