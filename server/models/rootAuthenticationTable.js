module.exports = (sequelize,DataTypes) => {
	const rootAuthenticationTable = sequelize.define("rootAuthenticationTable",{
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
	return rootAuthenticationTable;
}