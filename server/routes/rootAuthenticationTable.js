const express = require("express");
const router = express.Router();
const { rootAuthenticationTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await rootAuthenticationTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const rootauthenticationcommands = req.body;
	await rootAuthenticationTable.create(rootauthenticationcommands);
	res.json(rootauthenticationcommands);
});

module.exports = router;