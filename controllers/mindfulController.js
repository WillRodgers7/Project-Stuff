var express = require("express");

var router = express.Router();

// Import the model to use its database functions.


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
	res.render("index");
});
router.get("/home", function (req, res) {
	res.render("home");
});
router.get("/profile", function (req, res) {
	res.render("profile");
});

// Export routes for server.js to use.
module.exports = router;
