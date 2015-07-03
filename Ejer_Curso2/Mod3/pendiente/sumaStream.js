/*jslint node: true */
"use strict";
var x=0;
var y=0;
console.log("Introduce 2 números separados con espacio:\n");
process.stdin.resume();
process.stdin.on("data",function(line){
	process.stdout.write(line);
	
	console.log( x +" + " + y + " = " + (x+y));
});