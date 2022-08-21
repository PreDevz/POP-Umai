const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');

router.use('/', homeRoutes);
router.use('/admin', adminRoutes);

module.exports = router;