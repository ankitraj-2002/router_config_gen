
const express = require("express");
const router = express.Router();
const { consoleTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await consoleTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const consolecommands = req.body;
	await consoleTable.create(consolecommands);
	res.json(consolecommands);
});

module.exports = router;