module.exports = (sequelize,DataTypes) => {
	const trapOptionsTable = sequelize.define("trapOptionsTable",{
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
	return trapOptionsTable;
}