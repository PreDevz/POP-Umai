// Administration Page

const auth = require('../utils/auth');
const router = require('express').Router();
const session = require('express-session');
const { Admin } = require('../models/admin.js');

// Admin login 
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
router.post('/', async (req, res) => {

  // Ex POST req: 
  // {
  //   "name": "Henry",
  //   "email": "henry123@gmail.com",
  //   "password": "password123"
  // }
  
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
      
      res
        .json({
           message: `logged in! Welcome ${adminData.name}`
        });
    });
  } catch (err) {

    // catching server errors 
    res.status(500).json({
      message: "Can't login, Server Error", error: err
    })
  }

})

// Admin dashboard 
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
      res.status(200).json({message: "Session destroyed!"}).end();
    });
  } else {

    // if there's no session, send back 404 
    res.status(404).end();
  }
});

module.exports = router;