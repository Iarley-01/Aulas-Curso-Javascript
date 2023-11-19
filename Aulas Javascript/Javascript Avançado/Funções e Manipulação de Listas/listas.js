class Pessoa {
    constructor(name){
        this.name = name;
    }
}

/*const lista = [new Pessoa('Iarley'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa('José')];*/

const listaNum = [{ nome: 'Iarley' }, { nome: 'Andressa' }, { nome: 'Vitor' }, { nome: 'Amanda' }];
/*for(let i = 0; i < lista.length; i++){
    const element = lista[i];
    listaNomes.push(element.name);
}*/


//função forEach: percorre a lista orientada a funções (Forma reduzida do For)
/*lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef);
})

const cb = lista.forEach((value, i, listRef) => {
    console.log(value + i);
})

lista.forEach(cb);

for(let i = 0; i < lista.length; i++){
    const element = array[i];
    cb(element, i, lista);
}*/

//filter: retorna se o elemento que estamos percorrendo se mantém ou não no resultado, recebe uma função que retorna true ou false

/*const listaNumerosPares = lista.filter((element) => {
    return (element % 2 === 0);
})*/

//console.log(listaNumerosPares);

//map: transforma um elemento em outro
/*const listaNomes = lista.map((element, i) => {
    return`
        <li>
            ${element.name}
        </li>
    `
});*/

//console.log(listaNomes);

//reduce: reduz a lista até sobrar apenas um único elemento 

/*  const somaNumeros = listaNum.reduce((previous, current) => {
    //
   console.log(previous, current);
    return previous + current;
}, 0)

console.log(somaNumeros);*/

//join: junta a lista com um separador e transforma a lista numa string

const elementosHTML = listaNum.filter((e) => e.nome.startsWith('A'))
.map(e => `<li>${e.nome}</li>`)
.join('');

console.log(elementosHTML);

//console.log(listaNum.map((e) => e.nome).join('; '));

