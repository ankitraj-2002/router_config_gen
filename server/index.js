const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

/////Route objects/////
const setCommands = require("./routes/setTable");
const systemCommands = require("./routes/systemTable");
const baseCommands = require("./routes/BaseTable");
const portCommands = require("./routes/portTable");
const consoleCommands = require("./routes/consoleTable");
const auxiliaryCommands = require("./routes/auxiliaryTable");
const usbCommands = require("./routes/usbTable");
const managementCommands = require("./routes/managementethernetTable");
const flowControlCommands = require("./routes/flowControlTable");
const rootauthenticationCommands = require("./routes/rootAuthenticationTable");
const servicesCommands = require("./routes/servicesTable");
const sshCommands = require("./routes/sshTable");
const snmpCommands = require("./routes/snmpTable");
const policerName = require("./routes/policerNameTable");
const communityCommands= require("./routes/communityTable");
const trapgroupCommands = require("./routes/trapGroupTable");
const tracerouteCommands = require("./routes/tracerouteTable");
const categoriesCommands = require("./routes/categoriesTable");
const trapOptionsCommands = require("./routes/trapOptionsTable");

////*****////

////API endpoints//////
app.use("/setTable",setCommands);
app.use("/systemTable",systemCommands);
app.use("/baseTable",baseCommands);
app.use("/portTable",portCommands);
app.use("/consoleTable",consoleCommands);
app.use("/auxiliaryTable",auxiliaryCommands);
app.use("/usbTable",usbCommands);
app.use("/managementethernetTable",managementCommands);
app.use("/flowControlTable",flowControlCommands);
app.use("/rootAuthenticationTable",rootauthenticationCommands);
app.use("/servicesTable",servicesCommands);
app.use("/sshTable",sshCommands);
app.use("/snmpTable",snmpCommands);
app.use("/policerNameTable", policerName);
app.use("/communityTable", communityCommands);
app.use("/trapGroupTable", trapgroupCommands);
app.use("/tracerouteTable", tracerouteCommands);
app.use("/categoriesTable", categoriesCommands);
app.use("/trapOptionsTable", trapOptionsCommands);

////*****////


db.sequelize.sync().then(() =>{
	app.listen(3001,() =>{
		console.log("server is running on port 3001");
	});
});
