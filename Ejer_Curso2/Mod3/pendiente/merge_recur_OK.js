//Realizar en JavaScript un programa, de nombre “merge”,
//que integre n ficheros en uno solo.
//El programa se debe invocar de la siguiente forma
//node merge.js <dest> <f1> <f2> .. <fn>
//El programa debe crear un fichero <dest> concatenando
//los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.

/*jslint node: true */
"use strict";
var fs = require('fs'),
    dest = process.argv[2],
    origins = process.argv.slice(3, process.argv.length),
    writeStream = fs.createWriteStream(dest);

function merge(origins){
    if (origins.length == 0){
        return;
    } else {
        var readStream = fs.createReadStream(origins[0]);
        readStream.pipe(writeStream, { end: false });
        readStream.on('end', function(){
            merge(origins.slice(1, origins.length));
        });
    }
}

merge(origins);
