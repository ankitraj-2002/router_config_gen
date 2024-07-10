
const express = require("express");
const router = express.Router();
const { trapGroupTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await trapGroupTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const trapgroupcommands = req.body;
	await trapGroupTable.create(trapgroupcommands);
	res.json(trapgroupcommands);
});

module.exports = router;