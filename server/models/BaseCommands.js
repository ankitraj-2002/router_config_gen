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
	BaseCommands.associate = (models) => {
		BaseCommands.hasMany(models.systemCommands,{
			foreignKey:'LinkId',
			as:'systemCommands',
		});
	};
	return BaseCommands;
}