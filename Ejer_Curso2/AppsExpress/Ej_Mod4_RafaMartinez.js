// AppServidor con express
// get/preguntas --> página de entrada (index.html?)  1 titulo y 2 preguntas, Descubridor america y cap portugal.
//                   cada una con:  1 formulario(1 entrada texto y boton submit) 
//                      cada form incluye param oculto para identificar pregunta en serv(y resp)
// get/respuesta --> pagina respuesta segun formulario enviado (correcto o la respuesta es...) y enlace "volver"a pagina entrada
// no usar express-generator - ENTREGAR SOLO PROGRAMA - (O SEA SIN ARCHIVOS HTML)

// Modulos
var express = require("express");
var path = require("path");
var app = express();

//INUTIL SIN MAS PÁGINAS EN DIRECTORIO, PERO LO PONGO POR SER FUNCIONAL ( SI GUARDO CSS EN PUBLIC, IRIA OK)
app.use( express.static( path.join( __dirname, "public" ) ) );

//PENDIENTE DE FUNCIONAR ( PARECE QUE ENVIA MIME HTML EN VEZ DE CSS )
app.get( "estilo.css", function ( req, res ) {
    res.type( "text/txt" );
    res.send( '#contenidoprincipal {height: 740px;}#contenido {width: 750px;height: 450px;margin: 1px auto;padding: 0 20px;border: solid 20px green;'
   + 'border-radius: 20pxtext-align: center;box-shadow: 0 0 10px 4px rgba(119, 119, 119, 0.75);}'
   + 'p {color: red;font-size: 30px;font-weight: bold;margin: 10px auto;}#contenido h1 {font-size: 27px;font-family: "Rock Salt", cursive;}'
   + '.respuesta {border: solid 5px green;padding: 5px 10px;font-size: 27px;font-family: cursive;}.marcop {font-size: 20px;height: 40px;}'
   + 'form + h1 {margin: 70px auto;color: red;}' );
});
app.get("/preguntas", function (req, res) {
    res.send('<!DOCTYPE html><html lang="es">'
            +'<head><meta charset="utf-8" /><title>Preguntas</title>'
                +'<link href="estilo.css" rel="stylesheet" type="text/css"></head>'
            +'<body><section id="contenidoprincipal"><article id="contenido">'
              +'<h1>Responde correctamente a las dos preguntas y conseguirás...</h1>'
              +'<h1>Una palmadita en la espalda...!!!!</h1>'
                    +'<form method="get" action="/respuesta"><p> ¿Quien descubrió América? </p>'
                         +'<input type="text" name="p1" class="respuesta" value="responda aquí">'
                         +'<input type="submit" class="marcop" value="envía resp1" /></form>'
                    +'<form method="get" action="/respuesta"><p> ¿Capital de Portugal? </p>'
                         +'<input type="text" name="p2" class="respuesta" value="responda aquí">'
                         +'<input type="submit" class="marcop" value="envía resp2" /></form>'
                +'<h1>ESCRIBE LA RESPUESTA Y PULSA EL BOTÓN CORRESPONDIENTE</h1>'
             +'</article></section></body></html>');
});

app.get( "/respuesta", function ( req, res ) {

    if ( req.query.p1 === "Cristobal Colón" || req.query.p2 === "Lisboa" ) {
        res.send( "Respuesta Correcta" );
    }
    else if ( req.query.p1 === undefined ) {
        res.send( "Mal, La respuesta correcta es Lisboa" );
    }
    else {
        res.send( "Mal, La respuesta correcta es Cristobal Colón" );
    }
} );


    app.get("*", function (req, res) {
        res.send("No se que quieres-PARAMETROS ENVIADOS: "+req.query.p1+req.query.p2);
    });

    app.use(function (err, req, res) {
        res.send(err.toString());
    });
    app.listen(8000);
    console.log( "Listo en puerto 8000, Introduzca en navegador, http://localhost:8000/preguntas " );