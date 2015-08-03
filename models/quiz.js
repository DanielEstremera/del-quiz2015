module.exports = function(sequelize, DataTypes){
	return sequelize.define('Quiz' , //nombre de la tabla
				{pregunta: DataTypes.STRING,
				respuesta: DataTypes.STRING,
				});
}