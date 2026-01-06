const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");



router.get("/",userController.getallusers)

router.get("/:Id",userController.getuserById)

router.post("/",userController.addnewUser);

module.exports = router;