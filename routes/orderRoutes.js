const express = require("express");
const router = express.Router();
const orderController = require("../Controller/orderController");
const {requiresAuth} = require("../helper");


router.post("/placeOrder", requiresAuth, orderController.placeOrder);  
router.post("/UpdateStatus",requiresAuth,orderController.OrderStatus);

module.exports = router;