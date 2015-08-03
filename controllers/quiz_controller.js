var models = require('../models/models.js');
//Get quizes question

exports.index = function(req , res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs', {quizes: quizes});
	})
};
exports.show = function(req , res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show' , {quiz: quiz})
		
	})
};

//get quizes answer
exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		if(req.query.respuesta === quiz.respuesta){
			res.render('quizes/answer' , {quiz: quiz , respuesta: "Correcto"});
		}else{
			res.render('quizes/answer' , {respuesta: "Incorrecto"});
		}
	})
};

exports.author = function(req , res){
	res.render('quizes/author' , {nombre: "Daniel" , apellidos: "Estremera Lopez", nacionalidad: "española" , nacimiento: "1990" })
};
