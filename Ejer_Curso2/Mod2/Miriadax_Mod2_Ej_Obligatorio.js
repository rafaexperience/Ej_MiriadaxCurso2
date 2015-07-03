/*jslint node: true */
"use strict";
//Dado el siguiente programa JavaScript que implementa la agenda de telefonos:

//    variables privadas
//        -titulo = strig 
//        -contenido { "nombre":tfno} tambien llamado par,

//    metodos de clousure.
//        titulo_devuelve titulo agenda
//        tfno (nombre)devuelve tfno (añado aviso si no existe)
//        meter (nombre,tfno) añade par nombre valor a contenido (añado comprobacion repetido a mayores)
//        borrar: elimina par. (indica si se borro algo, a mayores)
//        toJSON - convierte en stringJson
//    !!  listar(titulo) devuelve string par con salto de linea
//    !!  mostrar string devuelto por listar en consola.

function agenda(titulo, datos)
{
    var _titulo = titulo;
    var _contenido = datos;
    return {
        titulo: function ()
        { return _titulo; },
        tfno: function (nombre)
        {
            if (_contenido[nombre] === undefined) {
                return nombre + " no está en la agenda";
            } else {
                return "el teléfono de " + nombre + " es " + _contenido[nombre];
            }
        },
        meter: function (nombre, tfno)
        {
            var msg = "";
            if (_contenido[nombre] !== undefined) {
                msg = "el tfno de " + nombre + ": " + _contenido[nombre] + ", ha sido cambiado por " + tfno;
                _contenido[nombre] = tfno;//se cambia despues, para poder poner el tfno antiguo
            }
            else {
                _contenido[nombre] = tfno;
                msg = "el teléfono " + _contenido[nombre] + " se asigno a " + nombre;
            }
            return msg;
            
        },
        borrar: function (nombre)
        {
            var msg = "";
            if (_contenido [nombre] !== undefined) {
                delete _contenido[nombre];
                msg = nombre + " ha sido eliminado de la agenda " + _titulo;
            }
            else {
                msg = "¿¿" + nombre + "??," + " ¿Quien es ese?";
            }
            return msg;
        },
        toJSON: function ()
        { return JSON.stringify(_contenido); },
        listar: function ()
        {
            var lista = "";
            for (var nom in _contenido) {
                if (_contenido.hasOwnProperty(nom))
                    lista += nom + ", " + _contenido[nom] + " \n";
            }
            
            console.log(lista);
        }
    };
}
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