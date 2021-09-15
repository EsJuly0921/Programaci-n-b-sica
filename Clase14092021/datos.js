/*Así se comentan los programas en JS*/
/*El uso del punto y coma (;) no es obligatorio, pero es buena práctica.*/ 

/*Tipos de datos básicos*/
var numero = 11;
var decimal = 9.11;
var negativo = -314;
var caracter = 'j';
var nombre = 'julio'; /*String <--- Cadena de texto. Siempre entre comillas simples o dobles. Toma los datos de manera literal.*/
var mensaje = 'Hola mundo!!!'; /*Los espacios en blanco, cuentan como caracteres y se toman en cuenta en los strings*/
var casado = true;
var viudo = false;

/*Operadores matemáticos*/
var suma = numero + decimal;
var resta = numero - decimal;
var multiplicacion = numero * decimal;
var division = numero / decimal;
var modulo = numero % decimal;  
numero++;
decimal--;
/*Si se realizan operadores matemáticos con string, se realiza un string y concatena el valor de las variables literalmente*/

var edad = 21; /*Si se utiliza el ++ delante de la variable, se realiza la operación antes de que la variable obtenga su valor*/
/*console.log(++edad);
console.log(edad++);*/

/*Operadores de asignación*/
/* = ;Otorga un valor a una variable*/
var variable = 5;
var variable2 = variable;
/* += ;Toma el valor de una primera variable y le suma el valor de una segunda variables*/
var variable3 = 20;
var variable4 = 10;
variable3 += variable4;
/* -=; *=; /=; %=*/

/*Operadores de comparación*/
var numero1 = '9'; /* <--- Los operadores de comparación, no toman en cuenta los strings, pero es una mala práctia*/
var numero2 = 16;

numero1 > numero2; /*Mayor que*/
numero1 >= numero2; /*Mayor o igual que*/
numero1 < numero2; /*Menor que*/
numero1 <= numero2; /*Menor o igual que*/
numero1 == numero2; /*Igual a: */
numero1 === numero2; /*Operador de comparación que sí toma en cuenta los strings*/ 
numero1 != numero2; /*Diferente de: */
numero1 !== numero2; /*Operador de comparación que sí toma en cuenta los strings*/ 

/*Operadores lógicos*/
var contrasena = true;
var usuario = true;
/*Utilizando valores lógicos de las tablas de verdad*/
contrasena && usuario;
contrasena || usuario;
!contrasena;

/*Operadores de cadena de texto*/
var cliente = 'Julio';
var msj = 'Bienvenido ';
var espacio = ' ' /*Antes de la versión sepa cuál. Ahora sí toma en cuenta los espacios en blanco de los strings*/
msj + cliente;