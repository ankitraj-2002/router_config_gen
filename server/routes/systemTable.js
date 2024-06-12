const express = require("express");
const router = express.Router();
const { systemTable }  = require("../models");

router.get("/",async (req,res) => {
	const listSetCommands = await systemTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const systemcommands = req.body;
	await systemTable.create(systemcommands);
	res.json(systemcommands);
});


module.exports = router;