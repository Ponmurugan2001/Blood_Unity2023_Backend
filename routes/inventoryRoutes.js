const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {createInventoryController,getInventoryController} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
http://localhost:8080/api/v1/inventory/create-inventory
router.post("/create-inventory", authMiddelware, createInventoryController);

http://localhost:8080/api/v1/auth/current-user
router.get('/get-inventory',authMiddelware, getInventoryController);



module.exports = router;
