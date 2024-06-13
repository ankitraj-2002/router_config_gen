const express = require("express");
const router = express.Router();
const { systemCommands }  = require("../models");

router.get("/",async (req,res) => {
	const listSetCommands = await systemCommands.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const systemcommands = req.body;
	await systemCommands.create(systemcommands);
	res.json(systemcommands);
});


module.exports = router;