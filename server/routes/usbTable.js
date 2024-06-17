
const express = require("express");
const router = express.Router();
const { usbTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await usbTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const usbcommands = req.body;
	await usbTable.create(usbcommands);
	res.json(usbcommands);
});

module.exports = router;