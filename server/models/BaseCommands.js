module.exports = (sequelize,DataTypes) => {
	const BaseCommands = sequelize.define("BaseCommands",{
		BaseCommand: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		UI_enabled: {
			type:DataTypes.BOOLEAN,
		},
	});

	return BaseCommands;
}