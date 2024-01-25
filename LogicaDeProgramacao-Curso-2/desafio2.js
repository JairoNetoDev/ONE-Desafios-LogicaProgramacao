//1. Criar uma função que exibe "Olá, mundo!" no console.
function exibirMensagem(){
    console.log('(Q01) Olá, mundo!');
}
exibirMensagem();
//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`(Q02) Olá, ${nome}!`);
}
exibirNome('Jairo');
//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularNumero(numero) {
    return console.log(`(Q03) Dobro de ${numero} = ${(numero*2)}`);
}
calcularNumero(10);
//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3){
    let media = parseFloat((num1 + num2 + num3)/3);
    return console.log(`(Q04) Média dos números (${num1}, ${num2}, ${num3}) = ${media}`);
}
calcularMedia(10, 8, 5);
//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibirMaiorNumero(num1, num2) {
    let maior = num1 > num2 ? `Maior Número é ${num1}` : `Maior Número é ${num2}`;
    return console.log(`(Q05) ${maior}`);
}
exibirMaiorNumero(5, 3);
//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarNumero(num1){
    return console.log(`(Q06) ${num1} ao quadrado = ${num1*num1}`);
}
multiplicarNumero(10);