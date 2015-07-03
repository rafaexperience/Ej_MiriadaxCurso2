/*jslint node: true */
"use strict";
//    Sacamos resultados de consola de manipulacion de variable importada
//    !!  mostrar string devuelto por listar en consola.
var agenda=require("./Ejer_Ob_Mod3_Agenda_exp.js");
console.log("-----------------------------------------------------------------------------");
console.log("\nLAS FUNCIONES DEVUELVEN RESULTADO, QUE ES LO QUE SE VERA EN CONSOLA,\n" +
    "CON UNA DESCRIPCION DE LO QUE SE HACE\n ");
console.log("\nSE CREA VARIABLE AMIGOS Y ASIGNAMOS FUNCION AGENDA CON PARAMETROS:\n");
var amigos = agenda("amigos", { Pepe: 123, "Jose Luis": 456, Chema: 789 });
console.log("\nOTRA A CLIENTES CON MISMOS DATOS PARA CONFIRMAR QUE NO TIENEN " + "\n" +
"LA MISMA REFERENCIA:\n");
var clientes = agenda("amigos", { Pepe: 123, "Jose Luis": 456, Chema: 789 });
console.log("\nMOSTRAMOS TITULOS DE AGENDAS:\n");
console.log(amigos.titulo());
console.log(clientes.titulo());
console.log("\nCOMPARAMOS AMBAS AGENDAS:\n");
console.log(amigos === clientes);
console.log("\nSEGUIMOS CON AGENDA AMIGOS:\n");
console.log("\nBUSCAMOS TFNO POR NOMBRE, 1ºEXISTE Y 2º NO:\n");
console.log(amigos.tfno("Jose Luis"));
console.log(amigos.tfno("Paquito"));
console.log("\nAÑADIMOS OTRO OBJETO(PERSONA Y TFNO) A CONTENIDO" + "\n" +
"(SI YA EXISTIA, NOS AVISA) :\n");
console.log(amigos.meter("Paquito", 258));
console.log(amigos.meter("Chema", 963));
console.log("\nELIMINAMOS OBJETO(PERSONA Y TFNO) DE CONTENIDO(SI NO EXISTIA," + "\n" +
" NOS AVISA y NO BORRA-pa que) :\n");
console.log(amigos.borrar("Paquito"));
console.log(amigos.borrar("Batman"));
console.log("\nCONVERTIMOS A STRING JSON, Y MOSTRAMOS TAL CUAL :\n");
console.log(amigos.toJSON());
console.log("\nAHORA LA DE CLIENTES, POR SI CAMBIO ALGO :\n");
console.log(clientes.toJSON());
console.log("\nY PARA ACABAR, EJECUTAMOS LISTA CON amigos.listar() Y clientes.listar():\n");
amigos.listar();
clientes.listar();
console.log("-----------------------------------------------------------------------------");