console.log('Aula sobre condicionais e boolean');

const numero = 0;
const isNumeroPar = (numero % 2) === 0;


if(numero === 0){
    console.log('Inválido!');
} else if(isNumeroPar){
    console.log('Par');
} else {
    console.log('Impar');
}
