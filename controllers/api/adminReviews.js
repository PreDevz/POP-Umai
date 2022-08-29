// Admin Dashboard Review routes

const auth = require('../../utils/auth');
const router = require('express').Router();

// import Review Model 
const Review = require('../../models/review');

router.get('/:id', auth, async (req, res) => {

  // Ex POST req:
  // {
  //   "name": "Nate's Event",
  //   "description": "Big event, you can't miss it",
  //   "event_date": "4/8/22",
  //   "event_time": "1am-11:59pm",
  //   "venue": "Churchill Ln",
  //   "location": "Perris, CA",
  //   "is_upcoming": true
  // }

})