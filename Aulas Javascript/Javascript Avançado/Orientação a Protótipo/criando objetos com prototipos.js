

const pessoa = {
    genero: 'masculino'
}

// Outra forma de criar objetos com protótipos
// recebe um protótipo como parâmetro
const iarley = Object.create(pessoa);
iarley.nome = 'Iarley';

console.log(iarley.genero);