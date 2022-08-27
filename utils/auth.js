// Authentication

// if the user isn't logged in 
const Auth = (req, res, next) => {
  if (!req.session.logged_in) {

  // redirect them to login page 
    res.redirect('/admin');
  } else {
    next();
  }
};

module.exports = Auth;