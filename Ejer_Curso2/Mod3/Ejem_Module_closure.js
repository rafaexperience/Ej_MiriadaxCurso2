/*jslint node: true */
"use strict";

module.exports = function (titulo, ini) {
	var _titulo = titulo;
	var _contenido = ini;
	return{
		titulo: function () {return _titulo;},
		meter: function (nombre, tfno) {_contenido[nombre]=tfno;},
		tf:function (nombre) {return _contenido[nombre];},
		borrar: function (nombre) { delete _contenido[nombre];},
		toJSON: function () {return JSON.stringify(_contenido);}
	};
};