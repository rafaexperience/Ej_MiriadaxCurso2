var express = require('express');
var path = require('path');
var app = express();

app.get('/preguntas', function(req, res){
	res.sendFile(path.join(__dirname+'/static/index.html'));
});

app.get('/respuesta', function(req, res) {
	var respuesta = "";
	if ( req.query._pregunta == 1 ) {
		respuesta = req.query.respuesta_1;
		if (respuesta.match(/(cr[iìí]st[oóò]b[aáà]l)?c[oóò]l[oóò]n$/i) != null){
			resp ="¡ENHORABUENA! La respuesta es " + respuesta;
		}else{
			resp ="Lo siento :( te haz equivocado. La respuesta correcta es Cristobal Colón.";
		}
	} else if( req.query._pregunta == 2 ){
		respuesta = req.query.respuesta_2;
		if (respuesta.match(/^l[iìí]sb[oóò][aáà]$/i) != null){
			resp ="ENHORABUENA! La respuesta es " + respuesta;
		}else{
			resp ="Lo siento :( te haz equivocado. La respuesta correcta es Lisboa.";
		}
	} else {
		res.send("Parametros invalidos");
	}

	res.send(resp + "<br/><a href='/preguntas'>Volver</a>");

});

app.get('*', function(req, res){
	res.send("URL INCORRECTA");
});

app.listen(8888);

console.log('Listening on port 8888');