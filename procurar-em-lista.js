const aluno = ['João', 'Juliana', 'Caio', 'Ana'];
const media = [10, 8, 7.5, 9];

const lista = [aluno, media];

function exibeNomeENota(aluno) {
    // o includes verifica se existe o item na lista. Sim=true Não=false.
    if (lista[0].includes(aluno)) {
        // O indexOf é utilizado para encontras a posição de um item. Achou=1 Não achou=-1.
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Caio');
exibeNomeENota('Vini');