const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productcontroller");


router.get("/",productControllers.getAllproduct);

router.get("/:id",productControllers.getproductwithId);

router.post("/:id",productControllers.addProduct);

module.exports = router;