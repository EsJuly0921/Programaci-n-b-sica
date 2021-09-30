var equis = 'j';

switch (equis) {

    case 0:
        document.write('Equis vale: ' + equis);
        break; /*<--- Para finalizar la sentencia de código*/ 
    case 1:
        document.write('Equis vale: ' + equis);
        break;
    case 2:
        document.write('Equis vale: ' + equis);
        break;

    default:
        /*document.write('Ingresa un valor valido');*/
        break;
}

/*Bucles*/

/*for(let contador = 0; contador < 5; contador++){
    document.write('Hola mundo x' + contador + '. ' + '<img src="../Clase28092021/img/Jommans-Mushroom-Search.ico" alt="">');
}*/

/*var contador = 0;

while (contador < 5) {
    document.write('<img src="../Clase28092021/img/Jommans-Mushroom-Search.ico" alt="">');
    contador += 2;
}*/

/*var contador = 90;

do {
    document.write('<img src="../Clase28092021/img/Jommans-Mushroom-Search.ico" alt="">');
    contador++;
} while (contador < 5);*/


/*for (let index = 0; index < 1; index++) {

    for (let index = 1; index <= 10; index++) {
        document.write('<img src="../Clase28092021/img/Jommans-Mushroom-Search.ico" alt="">' + index + '<br>');
    }
}*/

var numero = prompt('Dame un número');

for (let index1 = 1; index1 <= numero; index1++) {

    for (let index2 = 1; index2 <= index1; index2++) {
        document.write( '☺');
    }

    document.write('<br>')
}