/*jslint node: true */
"use strict";
var fs=require("fs");
var readStream=fs.createReadStream(process.argv[i]);
var writeStream=fs. createWriteStream(process.argv[3]);
readStream.pipe(writeStream);