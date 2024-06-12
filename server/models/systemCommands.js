module.exports = (sequelize,DataTypes) => {
	const systemCommands = sequelize.define("systemCommands",{
		systemCommands: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		UI_enabled: {
			type:DataTypes.BOOLEAN,
		},
	});
	systemCommands.associate = (models) => {
		systemCommands.belongsTo(models.BaseCommands,{
			foreignKey:'LinkId',
			as:'BaseCommands',
		});
	};
	return systemCommands;
};