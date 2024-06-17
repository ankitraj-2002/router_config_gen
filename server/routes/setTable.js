
const express = require("express");
const router = express.Router();
const { setTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await setTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const setcommands = req.body;
	await setTable.create(setcommands);
	res.json(setcommands);
});

module.exports = router;
