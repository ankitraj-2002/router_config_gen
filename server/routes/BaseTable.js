
const express = require("express");
const router = express.Router();
const { BaseTable }  = require("../models");


router.get("/",async (req,res) => {
<<<<<<< HEAD:server/routes/BaseTable.js
	const listSetCommands = await BaseTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const basecommands = req.body;
	await BaseTable.create(basecommands);
	res.json(basecommands);
=======
	const listSetCommands = await BaseCommands.findAll();
});
router.post("/",async (req,res) => {
	const basecommands = req.body;
	await BaseCommands.create(basecommands);
>>>>>>> 5485325 (link basecommands to systemCommands):server/routes/BaseCommands.js
});

module.exports = router;
