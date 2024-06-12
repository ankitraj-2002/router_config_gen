const express = require("express");
const router = express.Router();
const { BaseCommands }  = require("../models");

router.get("/",async (req,res) => {
	const listSetCommands = await BaseCommands.findAll();
});
router.post("/",async (req,res) => {
	const basecommands = req.body;
	await BaseCommands.create(basecommands);
});


module.exports = router;