console.log('Cálculo do Valor de uma Viagem - Programa Aprimorado');

const precoEtanol = 3.64;
const precoGasolina = 5.69;

const isEtanol = false;
const isGasolina = true;

const kmPorLitro = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;

if(isEtanol === true){

    const valorViagem = litrosConsumidos * precoEtanol;
    
    console.log('O gasto com Etanol foi: ', valorViagem.toFixed(2));
    
} else if (isGasolina === true){

    const valorViagem = litrosConsumidos * precoGasolina;
    console.log('O gasto com Gasolina foi: ', valorViagem.toFixed(2));
    
} else {
    console.log('Cálculo Inválido');
}