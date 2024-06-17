
const express = require("express");
const router = express.Router();
const { auxiliaryTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await auxiliaryTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const auxiliarycommands = req.body;
	await auxiliaryTable.create(auxiliarycommands);
	res.json(auxiliarycommands);
});

module.exports = router;