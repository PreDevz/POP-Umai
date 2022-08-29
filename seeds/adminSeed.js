
// import .env 
require('dotenv').config();

// exporting admin info with .env vars
module.exports = [
  {
    "name": process.env.ADMIN_NAME,
    "email": process.env.ADMIN_EMAIL,
    "password": process.env.ADMIN_PASSWORD
  }
]