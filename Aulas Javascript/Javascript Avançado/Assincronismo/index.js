//Assincronismo é quando nós queremos fazer uma coisa e ela não será executada no momento, apenas depois e retornará um resultado para nós em algum momento. No javascript nós usamos as promises para isso.

const promessaNumeroAleatorio = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
        resolve(numero);
    }, 1000)
})

console.log('Vai filhão!');
promessaNumeroAleatorio
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
       console.error(error);
    })
    .finally(() => {
        console.log('Finalizou!');
    })