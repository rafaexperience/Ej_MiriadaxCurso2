/*jslint node: true */
"use strict";

var t=0;

var interval = setInterval(function(){
	if(t!==5)
		{showTime()}
	else {stopTime();}
	}, 1000);
function showTime()
	{console.log(++t + " segundos");}
function stopTime()
// siguiente instruc para intervalo 
// la otra todo el proceso
//	{clearInterval(interval);}
	{process.exit();}

console.log("arranca programa");
