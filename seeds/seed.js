// Will seed events database
const sequelize = require('../config/connection');

// Import Models 
const Event = require('../models/Event');
const Admin = require('../models/Admin');

// import Seeds 
const eventSeed = require('./eventSeed.json');
const adminSeed = require('./adminSeed');

// import helpers 
const helper = require('../utils/helper');
  
// Add seeds data in database 
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // store Events 
  await Event.bulkCreate(eventSeed, {
    individualHooks: true,
    returning: true,
  });

  // store Admin 
  await Admin.bulkCreate(adminSeed, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);

};

seedDatabase();