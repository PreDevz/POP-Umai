// Events Page 

const router = require('express').Router();
const Event = require('../models/event');

router.get('/', async (req, res) => {

  try {

    // retrieve all events from database
    const eventsData = await Event.findAll()

    // rendering the homepage with data
    res
      .render
      (
        'events',
        {
      eventsData,
      loggedIn: req.session.loggedIn,
      })
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
      message: "Server error, cannot get events..."
    });
  }
});

module.exports = router;