//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log(`(D4-Q01) Boas vindas!`);
//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome__usuario = prompt('(D4-Q02) Insira seu nome');
console.log(`(D4-Q02) Boas vindas ${nome__usuario}!`);
//3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome__usuario = prompt('(D4-Q03) Insira seu nome'); // variável já foi criada na questão 2
alert(`(D4-Q03) Boas vindas ${nome__usuario}!`);
//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let pergunta_linguagem_programacao = prompt('(D4-Q04) Qual a linguagem de programação que você mais gosta?');
console.log(`(D4-Q04) Resposta: ${pergunta_linguagem_programacao}`);
//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 8;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`(D4-Q05) A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor1 = 1;
valor2 = 7;
resultado = valor1 - valor2;
console.log(`(D4-Q05) A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade__usuario = prompt('(D4-Q07) Insira sua idade:');
let maior_menor_idade = idade__usuario >= 18 ? 'Maior de Idade.' : 'Menor de Idade';// com o operador ternário não precisaria fazer o if e else abaixo, entretanto como a questão pediu para fazer com if e else esta também seria uma resposta válida.
if (idade__usuario >= 18){
    console.log(`(D4-Q07) Idade do Usuário ${idade__usuario}. É ${maior_menor_idade}.`);
} else {
    console.log(`(D4-Q07) Idade do Usuário ${idade__usuario}. É ${maior_menor_idade}.`);
}
//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('(D4-Q08) Insira um número aleatório:');
let positivo_negativo = numero > 0 ? 'Positivo.' : 'Negativo.'; // reduzindo linhas de código com o operador ternário.
alert(`(D4-Q08) O número ${numero} é ${positivo_negativo}`);
if (numero == 0){
    alert(`(D4-Q08) O número 0`);
}
//9. Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while(contador <= 10){
    console.log(`(D4-Q09) contador: ${contador}`);
    contador++;
}
//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 9.5;
let aprovado_reprovado = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(`(D4-Q10) ${aprovado_reprovado}`);
//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero_aleatorio = Math.random();
console.log(`(D4-Q11) ${numero_aleatorio}`);
//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
numero_aleatorio = parseInt(Math.random() * 10 + 1); // coloca-se "+1" porque o Math.random só vai entre 0 e 1, então se o número for (0.9 * 10 = 9 + 1 = 10)
console.log(`(D4-Q12) ${numero_aleatorio}`);
//13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numero_aleatorio = parseInt(Math.random() * 1000 + 1); // coloca-se "+1" porque o Math.random só vai entre 0 e 1, então se o número for (0.999 * 1000 = 999 + 1 = 1000)
console.log(`(D4-Q13)${numero_aleatorio}`);