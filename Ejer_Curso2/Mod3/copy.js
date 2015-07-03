/*jslint node: true */
"use strict";
//importa fs
var fs= require("fs");
//comprueba parametros
if (process.argv.length!==4)
	{console.log("parametros no coinciden\nnode copy.js <orig> <dest>");}
else
	{fs.readFile(process.argv[2],function(err,data){
		if(data===undefined)
			{console.log("ERROR: Archivo no encontrado: "+ err.path);}
		else
//copia fichero
			{fs.writeFile(process.argv[3],data,
				function(err){
					if(err) throw err;
					else console.log("Archivo copiado");})
            };
    })}