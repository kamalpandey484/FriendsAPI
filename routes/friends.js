const express = require("express");
const router = express.Router();
const Friends = require("../controller/friends");
const authenticate = require("../controller/authenticate");

// Get a list of Friends from database
router.get("/", authenticate.checkAuthentication, Friends.getAllFriends);

// Get a single friend from database
router.get("/:fname", authenticate.checkAuthentication, Friends.getFriend);

// post friend data into database
router.post("/", authenticate.checkAuthentication, Friends.postFriend);

// Get a list of Friends from database
router.put("/:id", authenticate.checkAuthentication, Friends.updateFriend);

module.exports = router;
