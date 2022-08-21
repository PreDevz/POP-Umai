const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');
const eventRoutes = require('./eventRoutes');
const galleryRoutes = require('./galleryRoutes');
const contactRoutes = require('./contactRoutes');
const aboutRoutes = require('./aboutRoutes');

router.use('/', homeRoutes);
router.use('/admin', adminRoutes);
router.use('events', eventRoutes);
router.use('/gallery', galleryRoutes);
routes.use('/contact', contactRoutes);
routes.use('/about', aboutRoutes);

module.exports = router;