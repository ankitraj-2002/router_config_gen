const express = require("express");
const router = express.Router();
const { servicesTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await servicesTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const servicescommands = req.body;
	await servicesTable.create(servicescommands);
	res.json(servicescommands);
});

module.exports = router;