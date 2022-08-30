// Admin Asset Routes 

const router = require("express").Router();

// import Admin Model 
const Admin = require("../../models/admin");

// Login Admin
router.post("/login", async (req, res) => {

  // Ex POST req: 
  // {
  //   "name": "Henry",
  //   "email": "henry123@gmail.com",
  //   "password": "password123"
  // }
  
  try {

    // check the database for user that matches email 
    const adminEmail = req.body.email;

    const adminData = await Admin.findOne({
      where:
        { email: adminEmail }
    });

    // check if this Admin is in the database 
    if (!adminData) {

      res
        .status(404)
        .json({
          message: "uh oh... Incorret Email or Password!"
        });
      
      return;
    }

    // check database for password if matches
    const pass = req.body.password;

    const isValidPassword = await adminData.checkPassword(pass);

    // if it doesn't match send back 400 status code
    if (!isValidPassword) {
      res
        .status(400)
        .json({
          message: "Wrong Password!"
        });
      
      return;
    }

    // Admin's Session 
    req.session.save(() => {

      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      const { id, name, email } = adminData;

      res
        .json({
          admin: {
            id,
            name,
            email
          },
           message: `Hello ${adminData.name}, you're logged in!`
        });
    });
    
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json({
      message: "Can't login, Server Error", error: err
    });
  }

});

// Logout Admin
router.post("/logout", async (req, res) => {

  // checked if their logged in 
  if (req.session.logged_in) {

    // if there is a session, destory it 
    req.session.destroy(() => {
      res
        .status(200)
        .json({
          message: "Session destroyed, User logged out!"
        })
        .end();
    });
  } else {

    // if there's no session, send back 404 
    res
      .status(404)
      .end();
  }
});

module.exports = router;