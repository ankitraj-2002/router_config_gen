
const express = require("express");
const router = express.Router();
const { communityTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await communityTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const communityCommands = req.body;
	await communityTable.create(communityCommands);
	res.json(communityCommands);
});

module.exports = router;