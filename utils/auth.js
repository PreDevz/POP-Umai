const Auth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/admin');
  } else {
    next();
  }
};

module.exports = Auth;