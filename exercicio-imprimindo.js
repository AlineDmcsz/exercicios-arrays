// Função que imprime o índice e o elemento de um array
function imprimirIndicesEElementos(array) {
    array.forEach((elemento, indice) => {
        console.log(`Índice: ${indice}, Elemento: ${elemento}`);
    });
}

// Exemplo de uso da função
const TocosAvaliados = [63, 42, 15, 78, 91, 34, 26, 55, 10, 97, 61, 88, 7, 20, 50, 84, 19, 72, 3, 67];
imprimirIndicesEElementos(TocosAvaliados);