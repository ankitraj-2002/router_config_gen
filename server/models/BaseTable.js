module.exports = (sequelize,DataTypes) => {
	const BaseTable = sequelize.define("BaseTable",{
		BaseCommand: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		UI_enabled: {
			type:DataTypes.STRING,
			allowNull:true,
		},
		NextTable:{
			type:DataTypes.STRING,
			allowNull:true,
		}
	});
	// BaseTable.associate = (models) => {
	// 	BaseTable.hasMany(models.systemCommands,{
	// 		foreignKey:'LinkId',
	// 		as:'systemCommands',
	// 	});
	// };
	return BaseTable;
}