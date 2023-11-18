
const pessoa = {
    genero: 'masculino'
}


function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log('Meu nome é ' + this.nome);
}

const iarley = new Pessoa('Iarley', 20);

console.log(iarley);

iarley.falar();

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    
    falar(){
        console.log('Meu nome é ' + this.nome);
    }
}