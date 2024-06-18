module.exports = (sequelize,DataTypes) => {
	const managementethernetTable = sequelize.define("managementethernetTable",{
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
	return managementethernetTable;
}