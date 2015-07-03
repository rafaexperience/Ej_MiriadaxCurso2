/*jslint node: true */
"use strict";
//importa fs
var fs= require("fs");
//comprueba parametros
if (process.argv.length!==4)
	{console.log("¡¡¡parametros no coinciden\nnode append.js <orig> <dest>");}
else
	{fs.readFile(process.argv[2],
		function(err,data){
			if(data===undefined)
				{console.log("¡¡¡Archivo no encontrado: "+ err.path)}
			else
				{data= "\n"+data;
				 fs.appendFile(process.argv[3],data,
					function(err){
						if(err){throw err;};
						console.log("datos añadidos a "+ process.argv[3])
					}
					)
				}
		}
	)}