const notas = [10, 6, 8];

//o push é utilizado para adiciona um número, ou alterar adicionando um elemento a array. E ele sempre adiciona o valor ao final do array.
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)