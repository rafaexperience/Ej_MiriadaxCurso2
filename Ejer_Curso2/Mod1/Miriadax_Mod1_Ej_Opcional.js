//Realizar en JavaScript para node.js un programa que saque por consola
//1) El número PI con ocho decimales (mas salto de linea)
 var paso1 = Math.PI.toFixed(8) + "\n";
//2) Dos línea en blanco
 var paso2 = "\n\n";
//3)  La ristra de caracteres UNICODE -> \u55e8\uff0c\u4f60\u597d\u5417
 var paso3 = "(\\u55e8\\uff0c\\u4f60\\u597d\\u5417) --> \u55e8\uff0c\u4f60\u597d\u5417";
// Mandamos todo a consola

console.log(paso1 + paso2 + paso3 + "\n");
//  ( Los caracteres chinos se veran si la consola admite unicode
// Creo que en windows no lo hace, se ve ok si cambias la configuracion regional a chino
// En Debian me sale ok y en pagina web habria que configurar charset=utf-8; en head

// Intento de hacerlos por conversion hexadecimal y probando otros codigos al guardar la pagina - ko
var x = "简".charCodeAt(0).toString(16);
var y = String.fromCharCode(parseInt(x, 16));
console.log("\\u" + x + "=" + y);