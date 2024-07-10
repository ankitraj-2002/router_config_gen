module.exports = (sequelize,DataTypes) => {
	const trapGroupTable = sequelize.define("trapGroupTable",{
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
	return trapGroupTable;
}