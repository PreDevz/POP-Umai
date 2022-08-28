
// import .env 
require('dotenv').config();

// admin info 
module.exports = [
  {
    "name": process.env.ADMIN_NAME,
    "email": process.env.ADMIN_EMAIL,
    "password": process.env.ADMIN_PASSWORD
  }
]