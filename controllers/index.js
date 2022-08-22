const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');
const eventRoutes = require('./eventRoutes');
const cookieRoutes = require('./cookieRoutes');
const contactRoutes = require('./contactRoutes');
const aboutRoutes = require('./aboutRoutes');

router.use('/', homeRoutes);
router.use('/admin', adminRoutes);
router.use('/events', eventRoutes);
router.use('/cookies', cookieRoutes);
router.use('/contact-us', contactRoutes);
router.use('/about', aboutRoutes);

module.exports = router;