// Administration Page

const auth = require('../utils/auth');
const router = require('express').Router();
const Event = require('../models/event');

// Admin Dashboard 
router.get('/', auth, async (req, res) => {

  try {

    // retrieve all events from database
    const eventsData = await Event.findAll()
      .catch((err) => {
        res
          .json(err)
      });

    // loop through each event to serialize it 
    const events = eventsData.map((event) => {
      event.get(
        { plain: true }
      )
    });

    // rendering the Dashboard page with all Events
    res.render(
      'dashboard',
      {
        events
      })
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

    // if they are already logged in, return them to dashboard
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    
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