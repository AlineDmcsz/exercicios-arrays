const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//slice vai dividir em duas partes iguais a lista de arrays.
const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
//(0, listaEstudantes.length/2); o 0 vai marcar o ínicio de onde deve ser cortado e a lista dividida ao meio marca o 'fim'.

const sala2 = listaEstudantes.slice(listaEstudantes.lenght);
//(listaEstudantes.lenght); aqui não serã definido o começo pois o JS entende que o final da outra lista seria o começo dessa, também não é marcado o fim poi já foi determinado o final na divisão da lista em 2.

console.log(sala1);
console.log(sala2);
