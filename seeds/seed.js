// Will seed imported Contents
const sequelize = require('../config/connection');

// Import Models 
const Event = require('../models/Event');
const Admin = require('../models/Admin');

// Import Seeds 
const eventSeed = require('./eventSeed.json');
const adminSeed = require('./adminSeed');

// import helpers 
const helper = require('../utils/helper');
  
// Add seeds data in database 
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // seed in Events 
  await Event.bulkCreate(eventSeed, {
    individualHooks: true,
    returning: true,
  });

  // seed in Admin 
  await Admin.bulkCreate(adminSeed, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

};

seedDatabase();