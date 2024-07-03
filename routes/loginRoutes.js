const express = require("express");
const router = express.Router();
const userController = require("../Controller/Usercontroller");

router.post("/login", userController.login);

module.exports = router;