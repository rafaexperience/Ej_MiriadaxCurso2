//Realizar en JavaScript un programa, de nombre “merge”, 
//que integre n ficheros en uno solo.
//El programa se debe invocar de la siguiente forma
//node merge.js <dest> <f1> <f2> .. <fn>
//El programa debe crear un fichero <dest> concatenando 
//los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.


/*jslint node: true */
"use strict";
var fs = require("fs");
var wStream = fs.createWriteStream(process.argv[2]);
var rStream;
for (var i in process.argv) {
	if (i>2){
		rStream=fs.createReadStream(process.argv[i]);
		rStream.pipe(wStream);
    }
}