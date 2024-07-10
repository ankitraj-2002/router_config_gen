
const express = require("express");
const router = express.Router();
const { categoriesTable }  = require("../models");


router.get("/",async (req,res) => {
	const listSetCommands = await categoriesTable.findAll();
	res.json(listSetCommands);
});
router.post("/",async (req,res) => {
	const categoriescommands = req.body;
	await categoriesTable.create(categoriescommands);
	res.json(categoriescommands);
});

module.exports = router;