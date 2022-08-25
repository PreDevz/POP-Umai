// Home Page

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {

    // rendering the homepage
    res.render("homepage");
  } catch (err) {

    // catching server errors
    res.status(500).send(err);
  }
});

module.exports = router;