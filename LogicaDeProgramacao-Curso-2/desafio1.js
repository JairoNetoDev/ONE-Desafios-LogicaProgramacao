//1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo = 'Hora do Desafio!';
//2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function msgConsole(){
    console.log('Botão console foi clicado com sucesso!');
}
//3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function msgAlert(){
    alert('Eu amo JS!!');
}
//4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function msgPrompt(){
    let cidadeBrasil = prompt('Insira um nome de uma cidade do Brasil:');
    alert(`Estive em ${cidadeBrasil} e lembrei de você.`);
}
//5. Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function somaNumeros(){
    let num1 = parseInt(prompt('Insira o 1° número:'));
    let num2 = parseInt(prompt('Insira o 2° número:'));
    let soma = num1 + num2;
    alert(`Soma dos números (${num1} + ${num2}) = ${soma}`);
}