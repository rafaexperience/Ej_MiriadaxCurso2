/*jslint node: true */
"use strict";
process.on("uncaughtException",function(err){
	console.log("algo paso.."+ err);
});
console.log("Deberia salir");
cagadaEvidente();
console.log("Esto es que la cagada esta controlada");