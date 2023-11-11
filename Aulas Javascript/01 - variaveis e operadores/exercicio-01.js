/*Programa para calcular o valor de uma viagem.

Teremos 3 variáveis. Sendo elas:
    1 - Preço do Combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;
    
Imprimir no console o valor que será gasto para realizar essa viagem*/

console.log('Exercício - Cálculo do Valor de uma Viagem');

const precoCombustivel = 5.69;
const distanciaEmKm = 100;
const KmPorLitro = 10;

const litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log('Valor da Viagem: ', valorGasto.toFixed(2));
