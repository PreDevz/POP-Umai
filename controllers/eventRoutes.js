// Events Page

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    // rendering the homepage
    res.render("events");
  } catch (err) {
    // catching server errors
    res.status(500).json(err);
  }
});

module.exports = router;
