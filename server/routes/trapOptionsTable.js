
const express = require("express");
const router = express.Router();
const { trapOptionsTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await trapOptionsTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const trapOptionscommands = req.body;
	await trapOptionsTable.create(trapOptionscommands);
	res.json(trapOptionscommands);
});

module.exports = router;