module.exports = (sequelize,DataTypes) => {
	const sshTable = sequelize.define("sshTable",{
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
	return sshTable;
}