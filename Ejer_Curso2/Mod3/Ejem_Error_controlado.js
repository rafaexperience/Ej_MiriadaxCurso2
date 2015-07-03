/*jslint node: true */
"use strict";
try{
	console.log("Deberia salir");
	cagadaEvidente();
	
}
catch(err){
	console.log("Anda!!, una cagada: "+ err);
}
finally{
	console.log("Esto es que la cagada esta controlada");
}