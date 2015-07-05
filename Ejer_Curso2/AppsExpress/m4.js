// EJERCICIO MODULO 4 CURSO Desarrollo de servicios en la nube con HTML5, Javascript y node.js
// Servidores e Introducción a express y a Middleware 

//Instalacion express
var express = require('express');
var app = express();

// página HTML de preguntas
app.get('/questiones', function(req, res){
	res.send(
		'<html><body>' +
				'<form method="get" action="/respuesta">' +
                    '<h3>¿Puede indicar qui&eacute;n descubri&oacute; Am&eacute;rica?</h3>' +
                    '<div><input type="text" name="respuesta" /></div>' +
                    '<div><input type="hidden" name="pregunta" value="P1" /></div>' +
                    '<div><input type="submit" value="Enviar" /></div>' +
                '</form>' +
                '<form method="get" action="/respuesta">' +
                    '<h3>¿Puede indicar la capital de Portugal?</h3>' +
                    '<div><input type="text" name="respuesta" /></div>' +
                    '<div><input type="hidden" name="pregunta" value="P2" /></div>' +
                    '<div><input type="submit" value="Enviar" /></div>' +
                '</form>' +
		 '</body></html>'
	);
});

// Gestion respuestas
app.get('/respuesta', function(req, res){
				var resultado = {final : "Respuesta incorrecta"	, setCorrect : function(){
				this.final = "Respuesta correcta";
							}
										};

	// Formatea posibles respuestas segun pregunta
		var soluciones = { "P1" : /^Cristobal Col(o|ó)n$/i, "P2" : /^Lisboa$/i};
	// Mira si la respuesta es la correcta
		if(req.query.respuesta.trim().match( soluciones[req.query.pregunta] )){
		resultado.setCorrect();
		}
	// Contestación en HTML
		res.send(
		'<html><body><p><b>' + resultado.final + '</b></p><p><a href="/questiones">Pagina Preguntas</a></p></body></html>'
			);
	});

// reenvío a pagina inicio al no tener recurso asignado
app.get('/', function(req, res){
	res.redirect('/questiones');
});

// se intenta aceder a un recurso inexistente
app.get('*', function(req, res){
	res.status(404).send('Se intenta aceder a un recurso inexistente');
});

//abre la conexion
app.listen(8000);
//indica en consola que el servidor esta activo
console.log('Server funcionando en: http://localhost:8000/');