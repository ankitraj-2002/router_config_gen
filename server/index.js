const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


const db = require("./models");

<<<<<<< HEAD
const setBaseCommands = require("./routes/BaseTable");
const setSystemCommands = require("./routes/systemTable");

app.use("/BaseTable",setBaseCommands);
app.use("/systemTable",setSystemCommands);
=======
const setBaseCommands = require("./routes/BaseCommands");
const setSystemCommands = require("./routes/systemCommands.js");

app.use("/BaseCommands",setBaseCommands);
app.use("/systemCommands",setSystemCommands);
>>>>>>> 5485325 (link basecommands to systemCommands)


db.sequelize.sync().then(() =>{
	app.listen(3001,() =>{
		console.log("server is running on port 3001");
	});
});
