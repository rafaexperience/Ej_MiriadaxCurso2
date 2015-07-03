/*jslint node: true */
"use strict";

var i;
for (i=0; i<process.argv.length;i++){
	console.log("PARAMETRO DEL PROCESO " + i + "= "+ process.argv[i]);
}