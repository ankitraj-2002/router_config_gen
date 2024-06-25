module.exports = (sequelize,DataTypes) => {
	const policerNameTable = sequelize.define("policerNameTable",{
		policerName: {
			type: DataTypes.STRING,
			allowNull:false,
		}
	});
	return policerNameTable;
}