// Will seed events database
const sequelize = require('../config/connection');
const Event = require('../models/Event');
const Admin = require('../models/Admin');

const eventSeedData = require('./eventSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Event.bulkCreate(eventSeedData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);

};

seedDatabase();