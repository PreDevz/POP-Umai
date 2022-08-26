// Cookies Page 

const router = require('express').Router();

router.get('/', async (req, res) => {
  
  try {

    // rendering the homepage 
    res.render('cookiespage')
  } catch (err) {

    // catching server errors 
    res
      .status(500)
      .json(err);
  }
});

module.exports = router;