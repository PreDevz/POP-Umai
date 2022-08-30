// Import route pages 
const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const eventRoutes = require("./eventRoutes");
const aboutRoutes = require("./aboutRoutes");
const cookieRoutes = require("./cookieRoutes");
const contactRoutes = require("./contactRoutes");
const dashboardRoutes = require("./dashboardRoutes");

// Import API folder
const apiRoutes = require("./api");

// use page routes 
router.use("/", homeRoutes);
router.use("/about", aboutRoutes);
router.use("/events", eventRoutes);
router.use("/cookies", cookieRoutes);
router.use("/contact-us", contactRoutes);
router.use("/dashboard", dashboardRoutes);

// use api routes 
router.use("/api", apiRoutes);

// if they go anywhere else  
router.use((req, res) => {
  res.send("<h1>Uh oh... wrong route!</h1> 😔 \n Maybe check the method you are using.");
});

module.exports = router;