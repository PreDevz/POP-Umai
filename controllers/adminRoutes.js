// Administration Page

const auth = require('../utils/auth')

const router = require('express').Router();

// admin login 
router.get('/', async (req, res) => {
  try {

    // rendering the homepage 
    res.render('login')
  } catch (err) {

    // catching server errors 
    res.status(500).json(err);
  }
});

// admin dashboard 
router.get('/dashboard', auth, async (req, res) => {
  try {

    // rendering the homepage 
    res.render('dashboard')
  } catch (err) {

    // catching server errors 
    res.status(500).json(err);
  }
});

module.exports = router;