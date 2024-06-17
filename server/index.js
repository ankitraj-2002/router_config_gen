const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


const db = require("./models");

//Route objects///
const setCommands = require("./routes/setTable");
const systemCommands = require("./routes/systemTable");
const baseCommands = require("./routes/BaseTable");
///////

////API endpoints//////
app.use("/setTable",setCommands);
app.use("/systemTable",systemCommands);
app.use("/baseTable",baseCommands);
////////



db.sequelize.sync().then(() =>{
	app.listen(3001,() =>{
		console.log("server is running on port 3001");
	});
});
