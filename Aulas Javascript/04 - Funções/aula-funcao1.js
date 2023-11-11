function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Iarley');

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log((quadrado(10)) + (quadrado(10)));

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));