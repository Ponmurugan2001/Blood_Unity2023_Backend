const mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// CREATE INVENTORY
exports.createInventoryController = async (req, res) => {
  try {
    const { email,inventoryType} = req.body;
    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }
    console.log(user.role)
    if (inventoryType === "in" && user.role === "donar") {
      throw new Error("Not a donar account");
    }
    if (inventoryType === "out" && user.role === "hospital") {
      throw new Error("Not a hospital");
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Record added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Errro In Create Inventory API",
      error,
    });
  }
};
// GET ALL BLOOD RECORS
exports.getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel.find({organisation: req.body.userId,}).populate("donar").populate("hospital").sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      messaage: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Inventory",
      error,
    });
  }
};