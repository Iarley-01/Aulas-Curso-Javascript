function meuNome(nome) {
    return 'Meu nome é: ' + nome;
}

//meuNome('Iarley');

function calculaIdade(idade) {
    if(idade >= 18) {
        console.log(meuNome('Iarley') + ' Maior de Idade');
    }else {
        console.log('Menor de Idade');
    }
    
}

calculaIdade(12);

calculaIdade(21);