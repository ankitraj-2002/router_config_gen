const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

const setBaseCommands = require("./routes/BaseCommands");
app.use("/BaseCommands",setBaseCommands);



db.sequelize.sync().then(() =>{
	app.listen(3001,() =>{
		console.log("server is running on port 3001");
	});
});
