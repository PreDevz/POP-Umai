// Admin Dashboard events routes

const auth = require('../../utils/auth');
const router = require('express').Router();

// import Event Model 
const Event = require('../../models/event');

// Find Event by ID
router.get('/:id', auth, async (req, res) => {

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
      
      return;
    }

    // once event matches user's input, send back that event data 
    res
      .status(200)
      .json(eventData)
    
    // revive Admin session 
    req.session.save(() => {
        
      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      res
        .json({
           message: `Admin still logged in`
        });
      })
    
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
      message: "Server Error"
    })
  }
})

// Add Event 
router.post('/', auth, async (req, res) => {
  
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

    // revive Admin session 
    req.session.save(() => {
        
      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      res
        .json({
           message: `Admin still logged in`
        });
      })

  } catch (err) {

    // catching server errors 
    console.log(err);

    res
      .status(500)
      .json(err);
  }
})

// Ppdate Event by ID
router.put('/:id', auth, async (req, res) => {

  try {

    // get data from user to update an event 
    const eventId = req.params.id;
    const name = req.body.name;
    const desc = req.body.description;
    const date = req.body.event_date;
    const time = req.body.event_time;
    const venue = req.body.venue;
    const location = req.body.location;
    const upcoming = req.body.is_upcoming;

    // updating in database 
    const event = await Event.update(
      {

      // new event data 
      name: name,
      description: desc,
      event_date: date,
      event_time: time,
      venue: venue,
      location: location,
      is_upcoming: upcoming
      },
      {

        // after getting data, find where to update 
        where: {
          id: eventId,
        }
      }
    )

    // if event doesn't exist in database 
    if (!event[0]) {

      // send back a 404 
      res
        .status(404)
        .json({
          message: "No event that matches that ID"
        })
      
      return;
    }

    // if there is a event, send back 200 and the event that's updated
    res
      .status(200)
      .json({
        event
      })
    
    // revive Admin session 
    req.session.save(() => {
    
      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      res
        .json({
            message: `Admin still logged in`
        });
      })

  } catch (err) {

   // catching server errors
    res
      .status(500)
      .json({
        message: "Server Error..."
      }) 

  }
})

// Delete Event by ID 
router.delete('/:id', auth, async (req, res) => {

  try {

    // get ID in parameter 
    const eventId = req.params.id;

    // delete event if ID matches event ID in databse 
    const deletedEvent = Event.destroy({
      where: {
        id: eventId
      }
    })

    // check if there even is an ID that matches Event in database 
    if (!deletedEvent) {

      res
        .status(404)
        .json({
          message: "No Event that matches that ID"
        })
      
      return;
    }

    res
      .status(200)
      .json(
        deletedEvent
    )
    
    // revive Admin session 
    req.session.save(() => {
    
      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      res
        .json({
            message: `Admin still logged in`
        });
    })
    
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
        message: "Opps, couldn't delete event, Server Error..."
      })
  }
})

module.exports = router;