const express = require("express");
const router = express.Router();
const CategoryController = require("../Controller/Categorycontroller");
const {requiresAuth} = require("../helper");

router.post("/addaCtegory", requiresAuth, CategoryController.addCategory);
router.post("/editCategory", requiresAuth, CategoryController.editCategory);
// router.get("/getCategory", logoController.getLogo);
router.get("/getCategoryList", requiresAuth,CategoryController.getCategoryList);
router.delete("/deleteCategory",requiresAuth,CategoryController.deleteCategory);




module.exports = router;