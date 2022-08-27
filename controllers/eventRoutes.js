// Events Page

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
<<<<<<< HEAD
    // rendering the homepage
    res.render("events");
=======

    // rendering the homepage 
    res.render('events')
>>>>>>> f5510809d8b742797eaf09a89224f6d55ac78d3f
  } catch (err) {
    // catching server errors
    res.status(500).json(err);
  }
});

module.exports = router;
