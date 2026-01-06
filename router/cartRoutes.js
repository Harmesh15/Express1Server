const express = require("express");
const router = express.Router();
const cartcontroller = require("../controllers/cartcontroller");

router.get('/:userId',cartcontroller.getuserById);

router.post("/:userId",cartcontroller.addUserById);

module.exports = router;