/* 2) Programa que percorre uma lista de números e imprime cada um no console */

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}