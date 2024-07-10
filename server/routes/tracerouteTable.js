
const express = require("express");
const router = express.Router();
const { tracerouteTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await tracerouteTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const traceroutecommands = req.body;
	await tracerouteTable.create(traceroutecommands);
	res.json(traceroutecommands);
});

module.exports = router;