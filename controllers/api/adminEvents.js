// Admin Dashboard events routes

const auth = require('../../utils/auth');
const router = require('express').Router();
const Event = require('../../models/event');

// add event 
router.get('post', async (req, res) => {
  try {
    
    // get users info from body 
    const name = req.body.name;
    const desc = req.body.description;
    const date = req.body.event_date;
    const time = req.body.event_time;
    const venue = req.body.venue;
    const location = req.body.location;
    const upcoming = req.body.is_upcoming;

    // create new event with users info 
    const event = await Event.create({
      name: name,
      description: desc,
      event_date: date,
      event_time: time,
      venue: venue,
      location: location,
      is_upcoming: upcoming
    });

    // new session 
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(event);
    });

  } catch (err) {

    // catching server errors 
    console.log(err);
    res.status(500).json(err);
  }
})

//  find one event
router.get('/:id', async (req, res) => {

  try {
    // get user's input ID 
    const pramId = req.params.id;
    const eventData = await Event.findOne({
      where:
        { id: pramId }
    });

    // check if there is a id in database
    if (!eventData) {
      res
        .status(404)
        .json({
          message: 'No event found with that ID'
        })
    }
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
      message: "Server Error"
    })
  }
})