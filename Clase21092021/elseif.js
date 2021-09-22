/*var nombre = prompt('¿Cuál es tu nombre?');*/

var edad = prompt('¿Cuál es tu edad?');

if (edad == 18) {
    alert('Bienvenido, apenas entras');
}else if (edad >18 && edad <30) {
    alert('Bienveido, tú ya eres adulto de entre 19 y 29')
}else if (edad >=30) {
    alert('Tienes 30 o más de 30')
}else{
    alert('Eres menor de edad')
}