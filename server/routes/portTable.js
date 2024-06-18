const express = require("express");
const router = express.Router();
const { portTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await portTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const portcommands = req.body;
	await portTable.create(portcommands);
	res.json(portcommands);
});

module.exports = router;