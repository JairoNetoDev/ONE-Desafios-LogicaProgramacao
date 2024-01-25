//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador_crescente = 1;
console.log(`(D3-Q01) ${contador_crescente}`);
while(contador_crescente <= 10){
    alert(`(D3-Q01) ${contador_crescente}`);
    contador_crescente++;
    console.log(`(D3-Q01) ${contador_crescente}`);
}
//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador_decrescente = 10;
console.log(`(D3-Q02) ${contador_decrescente}`);
while(contador_decrescente >= 0){
    alert(`(D3-Q02) ${contador_decrescente}`);
    contador_decrescente--;
    console.log(`(D3-Q02) ${contador_decrescente}`);
}
//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador_regressivo = prompt('(D3-Q03) Insira o número para fazer a contagem regressiva:');
console.log(`(D3-Q03) ${contador_regressivo}`);
while(contador_regressivo >= 0){
    alert(`(D3-Q03) ${contador_regressivo} segundos`);
    contador_regressivo--;
    console.log(`(D3-Q03) ${contador_regressivo}`);
}
//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contador_progressivo = prompt('(D3-Q04) Insira o número para fazer a contagem progressiva:');
let contador = 0;
console.log(`(D3-Q04) ${contador_progressivo}`);
while(contador <= contador_progressivo){
    alert(contador);
    contador++;
    console.log(`(D3-Q04) ${contador}`);
}