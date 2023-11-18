/* 
    boolean
    null
    undefined
    number
    string
    symbol
*/

// object

//+Infinity -Infinity e Nan
// Double Precision 64-bit binary format IEEE 754

//console.log(10 != '10');
//console.log(10 === '10');

//console.log(!'');

const pessoa = {
    nome: 'Iarley',
    idade: 20,
    falar: function() {
        console.log('Meu nome é '+ this.nome);
    }
}

//console.log(pessoa['nome']);
//console.log(pessoa.falar());

const y = pessoa.falar();
console.log(y);
//pessoa.falar();
