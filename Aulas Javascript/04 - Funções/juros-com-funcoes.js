/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    
    Código Condição de Pagamento:
   1 - Á vista Débito, recebe 10% de desconto;
   2 - Á vista no Dinheiro ou PIX, recebe 15% de desconto;
   3 - Em duas vezes, preço normal de etiqueta sem juros.
   4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
    

*/

function calculaDesconto(preco, desconto) {
   return (preco - (preco * (desconto / 100)));
}

function calculaJuros(preco, juros) {
    return (preco + (preco * (juros / 100)))
}

console.log('Cálculo do Valor de um Produto');

const precoProduto = 100;
const formaDePagamento = 2;


if(formaDePagamento === 1) {
    console.log('Pagamento em débito é de: ', calculaDesconto(precoProduto, 10));
} 
else if(formaDePagamento === 2){
    console.log('Pagamento em dinheiro/pix é de: ', calculaDesconto(precoProduto, 15));
}
else if(formaDePagamento === 3){
    console.log('Pagamento em duasParcelas é de: ', precoProduto);
}
else if(formaDePagamento === 4){
    console.log('Pagamento em mais de duas vezes é de: ', calculaJuros(precoProduto, 10));
}
else{
    console.log('Inválido');
}
