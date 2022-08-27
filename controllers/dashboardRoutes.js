// Administration Page

const auth = require('../utils/auth');
const router = require('express').Router();
const session = require('express-session');


// Admin Dashboard 
router.get('/', auth, async (req, res) => {

  try {

    res.render('dashboard')
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
        message: "server error"
      })
  }
})

// Admin login 
router.get('/login', async (req, res) => {
  
  try {

    // rendering the homepage 
    res.render('login')
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json(err);
  }
});



module.exports = router;