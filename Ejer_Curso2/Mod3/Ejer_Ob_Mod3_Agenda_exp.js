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

module.exports =function agenda(titulo, datos) {
    var _titulo = titulo;
    var _contenido = datos;
    return {
        
        titulo: function () { return _titulo; },
        tfno: function (nombre) {
            if (_contenido[nombre] === undefined) {
                return nombre + " no está en la agenda";
            } else {
                return "el teléfono de " + nombre + " es " + _contenido[nombre];
            }
        },
        meter: function (nombre, tfno) {
            var msg="";
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
        borrar: function (nombre) {
            var msg="";
            if (_contenido [nombre] !== undefined) {
                delete _contenido[nombre];
                msg = nombre + " ha sido eliminado de la agenda " + _titulo;
            }
            else {
                msg = "¿¿" + nombre + "??," + " ¿Quien es ese?";
            }
            return msg;
        },
        toJSON: function () { return JSON.stringify(_contenido); },
        listar: function () {
            var lista ="";
            for (var nom in _contenido) { lista += nom + ", "+ _contenido[nom]+" \n"; };

            console.log(lista);
        }
    };
};