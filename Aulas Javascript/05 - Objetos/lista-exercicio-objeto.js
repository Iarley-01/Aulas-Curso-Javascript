/* 1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar esse percurso */

class Carro {
    marca;
    cor; 
    gastoMedioEmKm;
    
    constructor(marca, cor, gastoMedioEmKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioEmKm = gastoMedioEmKm;
    }
    
    calcularPercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioEmKm * precoCombustivel;
    }
    
}

const uno = new Carro('Fiat', 'Prata', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10);

console.log(uno);

console.log(uno.calcularPercurso(100, 5));
console.log(palio.calcularPercurso(100, 5));