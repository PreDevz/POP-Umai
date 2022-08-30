// Events Page 

const router = require('express').Router();
const Event = require('../models/event');

router.get('/', async (req, res) => {

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

    // rendering the Events page with all Events
    res.render(
        'events',
        {
      events,
      logged_in: req.session.logged_in,
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