module.exports = (sequelize,DataTypes) => {
	const systemTable = sequelize.define("systemTable",{
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
	
	return systemTable;
};