
//Get quizes question
exports.question = function(req , res){
	res.render('quizes/question' , {pregunta: "Capital de Italia"})
};

//get quizes answer
exports.answer = function(req, res){
	if(req.query.respuesta === "Roma"){
		res.render('quizes/answer' , {respuesta: "Correcto"});
	}else{
		res.render('quizes/answer' , {respuesta: "Incorrecto"});
	}
};
exports.author = function(req , res){
	res.render('quizes/author' , {nombre: "Daniel" , apellidos: "Estremera Lopez", nacionalidad: "española" , nacimiento: "1990" , sexo: "hombre"})
};