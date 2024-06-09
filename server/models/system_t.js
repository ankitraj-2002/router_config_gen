module.exports = (sequelize,DataTypes) => {
	const system_t = sequelize.define("system_t",{
		systemCommands: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		UI_enabled: {
			type:DataTypes.BOOLEAN,
		},
	});
	return system_t;
}