const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(6);
notas.push(4);

let soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + notas[i];
}

const media = soma / notas.length;
console.log('Média: ' + media.toFixed(2));