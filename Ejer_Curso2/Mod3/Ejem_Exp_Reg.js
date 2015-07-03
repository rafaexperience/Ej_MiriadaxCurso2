/*jslint node: true */
"use strict";

//string.match() devuelve array de strings (solo el primero, salvo g)
//string.match()[0] devuelve el string que contiene el array resultante
 
//primera b //
console.log("acabaacaba".match(/b/));
//primera secuencia //
console.log("acabaacaba".match(/aba/));
//secuencia aba, si empieza string //
console.log("acabaacaba".match(/^aba/));
//secuencia aba, si acaba string //
console.log("acabaacaba".match(/aba$/));
//primer caracter (cualquiera) //
console.log("acabaacaba".match(/./));
//ultimos cuatro caracteres ( devuelve el string)
console.log("acabaacaba".match(/...$/)[0]);
//el primero de la clase /[aeiou]/
console.log("acebaaceba".match(/[aeiou]/));
//el primero que no sea de la clase /[aeiou]/
console.log("acebaaceba".match(/[^aeiou]/));
//primer separador: /f/n/r/t/v/u00a0/u1680.../
console.log("acebaaceba".match(/[\s]/));
// /[a-z]/ -->letras de la a a la z (minusculas)
// /[a-zA-Z0-9_] todas letras y numeros y _
// [0-9] solo numeros
console.log("canciones".match(/[aeiou]/));
console.log("canciones".match(/n[aeiou]/));
// CONTROLES I ->incluye mayusculas
//           g -> array con todas coincidencias
// ^ Y $ referencia linea, no string completo
console.log("canciones".match(/c[aeIou]/gi));
console.log("hola pepe,\nAhi estamos".match(/^[aeIou]/gmi));
// repeticion - devuelve coincidencias de conjuntos
console.log("tiene".match(/[aeIou]/gi));
console.log("tiene".match(/[aeIou]+/gi));
// + i 1 o mas; ? 0 o una; * 0 o mas
// si no coincide, devuelve "". final de string=""
console.log("tiene".match(/[aeIou]?/gi));
console.log("tiene".match(/[aeIou]*/gi));
// {n} nveces; {n,} n o mas, {n,m} entre n y m
console.log("tiene".match(/[aeIou]{2}/gi));
console.log("tiene".match(/[aeIou]{0,1}/gi));
// /[a-zñáéíóú-_.,\s] caracteres esp, signos y separadores
console.log("Mañana hará buen día".match(/[a-zñáéíóú\s]/gi));
// ansiosa(rep normal) busca la mas larga
// perezosa con ? despues de +*o? la primera que encaje
console.log("ccaaccbccaa".match(/.+cc/));
console.log("ccaaccbccaa".match(/.+?cc/));
// Patrones alternativos |
console.log("canciones".match(/ci|ca/g));
console.log("1 + 2 --> tres".match(/[a-z]+|[0-9]+/g));
//Subpatrones  devuelve array patron y subpatrones
console.log("canciones".match(/(..)..(..)/));
// Substitucion patrones REPLACE  ..?..
console.log("Número: 142719".replace(/[0-9]+/, "<número>"));
console.log("142,719".replace(/([0-9]+),([0-9]*)?/, "$1.$2"));