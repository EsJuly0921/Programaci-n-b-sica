/*var imagenes = []; <--- Esta vacío*/

/*var candidato = [];

var persona = 'Pedro';
var edad = 25;
var soltero = true;
var estatura = 1.76;

document.write(persona + '<br>');
document.write(edad + '<br>');
document.write(soltero + '<br>');
document.write(estatura + '<br><br>');*/

/*candidato = ['Pablo', 21, false, 1.80, 'Perez']; [x0, x1, x2, x...] <--- Los arrays tienen index definidios por Z+
document.write(candidato[0]);*/

/*for (let index = 0; index < candidato.length; index++) {

    console.log(index);
    document.write(candidato[index] + '<br>');
}*/

/*var imagenes = [
    'alabasta manga',
    'Corey Taylor',
    'Gorillaz Graf',
    'Kakashi portada',
    'Spirited Away',
];

for (let index = 0; index < imagenes.length; index++) {
    var template = '<img src="../Clase30092021/img/' + imagenes[index] + '.jpg" alt="">';
    document.write(template + '<br>');
}*/

var preguntas = [
    '¿Cuál es tu nombre?',
    '¿Cuál es tu edad?',
    '¿Cuál es tu ciudad de origen?',
    '¿Cuál es tu profesión?',
    '¿Cuál es tu estado civil?',
];

var respuestas = [
    prompt('¿Cuál es tu nombre?'),
    prompt('¿Cuál es tu edad?'),
    prompt('¿Cuál es tu ciudad de origen?'),
    prompt('¿Cuál es tu profesión?'),
    prompt('¿Cuál es tu estado civil?'),
];

for (let index = 0; index < preguntas.length; index++) {
    document.write(preguntas[index] + ' ' + respuestas[index] + '<br>');
};