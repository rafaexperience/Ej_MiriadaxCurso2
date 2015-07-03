/*jslint node: true */
"use strict";
function Agenda(titulo,ini) {
	this.titulo=titulo;
	this.contenido=ini;
};
Agenda.prototype={
	titulo:function () {
		return this.titulo;
	},
	meter:function (nombre,tfno) {
		return this.contenido[nombre]=tfno;
	},
	tf: function (nombre) {
		return this.contenido[nombre];
	},
	borrar: function (nombre) {
		delete this.contenido[nombre];
	},
	toJSON:function () {
		return JSON.stringify(this.contenido);
	}
};
module.exports = Agenda;