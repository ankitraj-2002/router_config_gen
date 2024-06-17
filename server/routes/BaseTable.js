const express = require("express");
const router = express.Router();
const { BaseTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await BaseTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const basecommands = req.body;
	await BaseTable.create(basecommands);
	res.json(basecommands);
});

module.exports = router;