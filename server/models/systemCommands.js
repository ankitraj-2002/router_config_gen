module.exports = (sequelize,DataTypes) => {
	const systemCommands = sequelize.define("systemCommands",{
		BaseCommand: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		UI_enabled: {
			type:DataTypes.STRING,
			allownull:true
		},
		NextTable: {
			type:DataTypes.STRING,
			allownull:true
		}
	});
	// systemCommands.associate = (models) => {
	// 	systemCommands.belongsTo(models.BaseCommands,{
	// 		foreignKey:'LinkId',
	// 		as:'BaseCommands',
	// 	});
	// };
	return systemCommands;
};