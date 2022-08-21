const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');
const eventRoutes = require('./eventRoutes');
const galleryRoutes = require('./galleryRoutes');

router.use('/', homeRoutes);
router.use('/admin', adminRoutes);
router.use('events', eventRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;