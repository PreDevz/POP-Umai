// Admin Dashboard events routes

const auth = require("../../utils/auth");
const router = require("express").Router();

// import Event Model 
const Event = require("../../models/event");

router.get("/", async (req, res) => {

  try {
    const eventData = await Event.findAll().catch((err) => {
      res.json(err);
    });

    res.send(eventData);
  }

  catch {
    res.status(500).json({
      message: "Server error, cannot get events..."
    });
  }

});

// Find Event by ID
router.get("/:id", async (req, res) => {

  try {

    // get user's input ID 
    const pramId = req.params.id;

    // search datbase to get one event
    const eventData = await Event.findOne({
      where:
        { id: pramId }
    });

    // check if there is a id in database
    if (!eventData) {
      res
        .status(404)
        .json({
          message: "No event found with that ID"
        });
      
      return;
    }
    
    // revive Admin session 
    req.session.save(() => {
        
      // req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
    });
    
    // once event matches user's input, send back that event data 
    res
    .status(200)
    .json(eventData);
    
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
      message: "Server Error"
    });
  }
});

// Add Event 
router.post("/", auth, async (req, res) => {
  
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
        
      // req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
    });
    
    // send back created event 
    res
      .status(200)
      .json({
        message: "Successfully Created!",
        event: event
      });

  } catch (err) {

    // catching server errors 
    console.log(err);

    res
      .status(500)
      .json(err);
  }
});

// Update Event by ID
router.put("/:id", auth, async (req, res) => {

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
    );

    // if event doesn't exist in database 
    if (!event[0]) {

      // send back a 404 
      res
        .status(404)
        .json({
          message: "No event that matches that ID"
        });
      
      return;
    }
    
    // revive Admin session 
    req.session.save(() => {
    
      // req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      // res
      //   .json({
      //       message: "Still logged in"
      //   });

    });
    
    // if there is a event, send back 200 and the event that's updated
    res
    .status(200)
    .json({
      message: "Successfully Updated!",
      event: event
    });

  } catch (err) {

   // catching server errors
    res
      .status(500)
      .json({
        message: "Server Error..."
      }); 

  }
});

// Delete Event by ID 
router.delete("/:id", auth, async (req, res) => {

  try {

    // get ID in parameter 
    const eventId = req.params.id;

    // delete event if ID matches event ID in databse 
    const deletedEvent = await Event.destroy({
      where: {
        id: eventId
      }
    });

    // check if there even is an ID that matches Event in database 
    if (!deletedEvent) {

      res
        .status(404)
        .json({
          message: "No Event to delete that matches that ID"
        });
      
      return;
    }
    
    // revive Admin session 
    req.session.save(() => {
    
      // req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      // res
      //   .json({
      //       message: "Still logged in"
      //   });
    });

    // Once deleted, send back OK message 
    res
    .status(200)
    .json({
      message: "Successfully Deleted!",
      deleted: deletedEvent
    });
    
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
        message: "Opps, couldn't delete event, Server Error..."
      });
  }
});

module.exports = router;