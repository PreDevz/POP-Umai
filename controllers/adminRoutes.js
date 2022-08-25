// Administration Page

const auth = require('../utils/auth')
const router = require('express').Router();
const { Admin } = require('../models');
const session = require('express-session');

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

// admin login check 
router.post('/login', async (req, res) => {
  
  try {
    // check the database for user that matches email 
    const adminData = await Admin.findOne({
      where:
        { email: req.body.email }
    });

    // check database to see if passwords match
    const isValidPassword = await adminData.checkPassword(req.body.password);

    if (!isValidPassword) {
      res.status(400).json({ message: 'Wrong Email or Password' });
      return;
    }

    // Admin's Session 
    req.session.save(() => {
      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      res.json({ user: adminData, message: 'logged in!' });
    });
  } catch (err) {

    // catching server errors 
    res.status(500).json({ message: "Server Error", error: err })
  }

})

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

// Logout 
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {

    // if there is a session, destory it 
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {

    // if there's no session, send back 404 
    res.status(404).end();
  }
});

module.exports = router;