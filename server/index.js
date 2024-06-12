const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


const db = require("./models");

const setBaseCommands = require("./routes/BaseCommands");
const setSystemCommands = require("./routes/systemCommands.js");

app.use("/BaseCommands",setBaseCommands);
app.use("/systemCommands",setSystemCommands);


db.sequelize.sync().then(() =>{
	app.listen(3001,() =>{
		console.log("server is running on port 3001");
	});
});
