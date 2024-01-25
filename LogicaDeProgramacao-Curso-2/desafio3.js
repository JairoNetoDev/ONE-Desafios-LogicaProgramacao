//1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso){
    let imc = peso/(altura**2);
    return imc.toFixed(2);
}
let alturaIMC = prompt('(D3-Q01) Insira a sua altura para o calculo do IMC:');
let pesoIMC = prompt('(D3-Q01) Insira a sua altura para o calculo do IMC:');
alert(`(D3-Q01) IMC: ${calcularIMC(alturaIMC, pesoIMC)}`);
console.log(`(D3-Q01) IMC: ${calcularIMC(alturaIMC, pesoIMC)}`);
//2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero){
    if (numero === 0 || numero === 1) {
        return 1;
      }
    

    let fatorial = numero;
    let resultado = fatorial;
    for(let i = 1; i < fatorial; i++){
        resultado *= i;
    }
    return resultado;
}
let numeroFatorial = prompt(`(D3-Q02) Insira um número para fazer seu Fatorial:`);
alert(`(D3-Q02) Fatorial: ${calcularFatorial(numeroFatorial)}`);
console.log(`(D3-Q02) Fatorial: ${calcularFatorial(numeroFatorial)}`);
//3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(dolar){
    let cotacaoDolar = 4.80;
    let real = parseFloat(dolar * cotacaoDolar);
    return real.toFixed(2);
}
let numeroDolar = prompt('(D3-Q03) Insira o valor (em dolar) para ser transferido em real:');
alert(`(D3-Q03) Valor em Real: ${converterDolarParaReal(numeroDolar)}`);
console.log(`(D3-Q03) Valor em Real: ${converterDolarParaReal(numeroDolar)}`);
//4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura){
    let perimetro = (altura + largura) * 2;
    let area = altura * largura;
    
    alert(`(D3-Q04) Perímetro da Sala: ${perimetro.toFixed(2)}m`);
    alert(`(D3-Q04) Área da Sala: ${area.toFixed(2)}m²`);
    console.log(`(D3-Q04) Perímetro da Sala: ${perimetro.toFixed(2)}m`);
    console.log(`(D3-Q04) Área da Sala: ${area.toFixed(2)}m²`);
}
let alturaSala = parseFloat(prompt('(D3-Q04) Insira a altura da Sala:'));
let larguraSala = parseFloat(prompt('(D3-Q04) Inisira a largura da Sala:'));
calcularAreaPerimetroSalaRetangular(alturaSala, larguraSala);
//5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularPerimetroSalaCircular(raio){
    let PI = 3.14;
    let perimetroSalaCircular = (2 * PI) * raio;
    return perimetroSalaCircular.toFixed(2);
}
let raioSalaCircular = prompt('Insira o Raio da Sala:');
alert(`(D3-Q05) Perímetro da Sala Circular: ${calcularPerimetroSalaCircular(raioSalaCircular)}`);
console.log(`(D3-Q05) Perímetro da Sala Circular: ${calcularPerimetroSalaCircular(raioSalaCircular)}`);
//6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function calcularTabuada(numero){
    let tabuada = new Array();
    for(let i = 0; i <= 10 ; i++){
        tabuada.push(`${numero} * ${i} = ${(numero * i).toFixed(2)}\n`);
    }
    alert(tabuada);
    console.log(tabuada);
    return tabuada;
}
let numeroTabuada = parseFloat(prompt('Insira o número para ver a sua tabuada:'))
calcularTabuada(numeroTabuada);