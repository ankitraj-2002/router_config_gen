const express = require("express");
const router = express.Router();
const { policerNameTable }  = require("../models");


router.get("/",async (req,res) => {
	const listPolicerName = await policerNameTable.findAll();
	res.json(listPolicerName);
});
router.post("/",async (req,res) => {
    const policerName = req.body;
	await policerNameTable.create(policerName);
	res.json(policerName);
});

module.exports = router;