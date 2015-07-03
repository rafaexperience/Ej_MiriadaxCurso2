/*jslint node: true */
"use strict";

setTimeout(function() {console.log("Evento A");}, 10);
setTimeout(function() {console.log("Evento B");}, 1);
setTimeout(function() {console.log("Evento C");}, 0);
process.nextTick(function(){console.log("TICKET D")});
process.nextTick(function(){console.log("TICKET E")});
console.log("Programa Principal Fin");