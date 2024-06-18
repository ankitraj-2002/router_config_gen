
const express = require("express");
const router = express.Router();
const { managementethernetTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await managementethernetTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const managementethernetTable = req.body;
	await managementethernetTable.create(managementethernetTable);
	res.json(managementethernetTable);
});

module.exports = router;