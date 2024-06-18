const express = require("express");
const router = express.Router();
const { flowControlTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await flowControlTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const flowcontrolcommands = req.body;
	await flowControlTable.create(flowcontrolcommands);
	res.json(flowcontrolcommands);
});

module.exports = router;