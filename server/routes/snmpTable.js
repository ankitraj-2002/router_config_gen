const express = require("express");
const router = express.Router();
const { snmpTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await snmpTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const snmpcommands = req.body;
	await snmpTable.create(snmpcommands);
	res.json(snmpcommands);
});

module.exports = router;