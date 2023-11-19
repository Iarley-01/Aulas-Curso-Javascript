function falarMeuNome() {
    console.log('Meu nome é Iarley');
}

// É possível chamar funções dentro de outras funções
function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome();
    console.log('Alves da Silva');
    return falarMeuNome;
}

falarMeuNomeCompleto(falarMeuNome)();

//Existem duas formas de declarar funções
// 1ª Forma - Function Declaration
function nomeDaFuncao() {
    console.log('nomeDaFuncao');
}

//2ª Forma armazenar a função dentro de uma variável (Function Expression)
const nomeDeOutraFuncao = function () {
    console.log('nomeDeOutraFuncao');
}
//Devido ao hoisting a 2ª Forma só pode ser chamada depois da declaração

nomeDaFuncao();
nomeDeOutraFuncao();


//
function funcao1() {
    console.log(this);
}

//Arrow Function
/*const funcao2 = () => {
    console.log(this);
}*/

/*const iarley = {
    nome: 'Iarley',
    funcao1,
    //funcao2
}*/

//iarley.funcao1();
//iarley.funcao2();


//Característica de Closur
function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));

//Funções são objetos e possuem métodos
function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

const pessoa = {
    nome: 'Iarley',
    idade: 21
}

gritar();
gritar.apply(pessoa, ['Oii']);

function adicao(x ,y) {
    return x + y;
}

function multiplicacao(x, y) {
    return x * y;
}

function calcular(x, op, y) {
    console.log(op(x, y));
}

calcular(10, adicao, 20);
calcular(10, multiplicacao, 20);

/*document.getElementById('btn1').addEventListener('click', () => {
    console.log('Clicou');
})*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//função forEach: percorre a lista orientada a funções
lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef);
})
