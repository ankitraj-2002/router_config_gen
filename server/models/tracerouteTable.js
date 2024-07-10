module.exports = (sequelize,DataTypes) => {
	const tracerouteTable = sequelize.define("tracerouteTable",{
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
	return tracerouteTable;
}