// Will seed events database
const sequelize = require('../config/connection');

// Import Models 
const Event = require('../models/Event');
const Admin = require('../models/Admin');

// import Seeds 
const eventSeed = require('./eventSeedData.json');
const adminSeed = require('./adminData.json')

// Add seeds data in database 
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Event.bulkCreate(eventSeedData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);

};

seedDatabase();