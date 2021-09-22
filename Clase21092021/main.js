/*document.write('Hello World! :3'); Método write es una función a la que se le dice que hacer*/



/*var item1 = 50;
var item2 = 20;

if (item1 >= item2) {

    if (item1 == item2) {
        document.write(item1 + ' es igual a: ' + item2);
    }else{
        document.write(item1 + ' es mayor que: ' + item2);
    }
}else{
    document.write(item1 + ' es menor que: ' + item2);
}*/



/*var pass1 = 'Loquesea_2008';
var user1 = 'EsJuly0921';

var pass2 = 'Loquesea_2008';
var user2 = 'EsJuly0921';

if (pass2 == pass1 && user1 == user2) {
    document.write('¡Bienvenido!');
}else{
    document.write('La contraseña o el usuario son incorrectos');
}*/



/*var soltero = false;
var dinero = true;
var hombre = true;

if ((soltero || dinero) && hombre) {
    document.write('Eres candidato');
}else{
    document.write('No eres candidato por onvre :(');
}*/



/*alert('Hola');*/
/*prompt('¿Cuál es tu edad?');*/


/*Actualizado con else if*/
var nombre = prompt('¿Cuál es tu nombre?');
var edad = prompt('¿Cuál es tu edad?');

if (edad == 18) {
    alert('Hola, ' + nombre + '. Gracias por querer entrar a nuestro sitio y bienvenido al mundo de los adultos ;D');
}else if (edad > 18 && edad <=30) {
    alert('Hola, ' + nombre + '. Gracias por querer entrar a nuestro sitio, aunque los años se empiecen a ver');
}else if (edad > 30) {
    alert('Hola, ' + nombre + '. Gracias por querer entrar a nuestro sitio, esperamos tengas seguro de gastos médicos MAYORES');        
}else{
    alert('Hola, ' + nombre + '. Gracias por querer entrar a nuestro sitio, pero debido a que eres un niño, no podrás entrar ;(');
}