var fs = require("fs");

if(process.argv.length < 4){
	console.log("sytax: node append <destino> <original0>  <original1> <original2> .....");
	process.exit();
}

for (var i in process.argv){
	if (i > 2){
		fs.readFile(process.argv[i],
			
			function(err, data){
				console.log("llegamos appendfile " + i);
				fs.appendFileSync(	process.argv[2],data,
					function (err){
						if (err) throw err;
						console.log(i);
						if(i===process.argv.lenght){
						console.log(process.argv[i] + "files appended");
						};}

					);
				}

			);

	}

}