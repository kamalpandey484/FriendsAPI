const express = require("express");
const router = express.Router();
const authenticateUser = require("../controller/authenticate");

// post authenticate
router.post("/", authenticateUser.authenticate);

module.exports = router;
