/*jslint node: true */
"use strict";
var fs = require("fs");
fs.readFile("archivo.js", "ascii",
	function(err,data)
	{if (data===undefined)
		{console.log(err.path+ " :No localizado");}
	else
		{console.log("\n-----------\n"+
			data +
			"\n-----------\n")}
	});