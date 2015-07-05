var express = require('express');
var app = express();

app.get('/preguntas', function (req, res){

	res.send('<html><body>'
			+'<form method="get" action="/respuesta">'
				+'¿Quién descubrió América?: <br>'
				+'<input type="hidden" name= "id_respuesta" value= "1"/><br>'
				+'<input type="text" name= "respuesta_usuario" /><br>'
				+'<input type="submit" value="Enviar respuesta"/>'
			+'</form>'
			+'<form method="get" action="/respuesta">'
				+'¿Capital de Portugal?: <br>'
				+'<input type="hidden" name= "id_respuesta" value= "2"/><br>'
				+'<input type="text" name= "respuesta_usuario" /><br>'
				+'<input type="submit" value="Enviar respuesta"/>'
			+'</form>'
		+'</body></html>');
});

app.get('/respuesta', function (req, res){

	var r='';

	if(req.query.id_respuesta==1){
		if(req.query.respuesta_usuario === "Cristobal Colón"){
			r='Respuesta correcta,  ' + req.query.respuesta_usuario + ' descubrió América.' ;
		}
		else{
			r='Respuesta incorrecta,  Cristobal Colón descubrió América.';
		}
		
		
	
	}
	else if(req.query.id_respuesta==2){
		if(req.query.respuesta_usuario === "Lisboa"){
			r='Respuesta correcta,  ' + req.query.respuesta_usuario + ' es la capital de Portugal.';
		}
		else{
			r='Respuesta incorrecta,  Lisboa es la capital de Portugal.';
		}
	}

	res.send(r+
		'<html><body>'
			+'<form method="get" action="/preguntas">'
			+'\n <br>'
				+'<input type="submit" value="Volver a las preguntas"/>'
			+'</form>'
			+'</body></html>');

});

app.get('*',function(req,res){
	var cadena_error='La url introducida no es válida, pulse en el botón para iniciar preguntas';
	res.send(cadena_error+
	'<html><body>'
			+'<form method="get" action="/preguntas">'
			+'\n <br>'
				+'<input type="submit" value="Iniciar las preguntas"/>'
			+'</form>'
			+'</body></html>');
});



app.listen(8000);