// Admin Dashboard Review routes

const router = require('express').Router();

// import Review Model 
const Review = require('../../models/review');

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