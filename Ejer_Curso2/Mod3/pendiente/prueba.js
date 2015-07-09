var fs = require("fs");
fs.readFile('prueba.js',{encoding :"utf8"}, function (err, data) {
  if (err) throw err;
  console.log(data);
});
