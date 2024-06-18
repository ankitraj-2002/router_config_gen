const express = require("express");
const router = express.Router();
const { sshTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await sshTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const sshcommands = req.body;
	await sshTable.create(sshcommands);
	res.json(sshcommands);
});

module.exports = router;