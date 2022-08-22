// Home Page

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {

    // rendering the homepage
    // res.render('homepage')
    res.json({message: "hello"})
  } catch (err) {

    // catching server errors 
    res.status(500).json(err);
  }
});

module.exports = router;