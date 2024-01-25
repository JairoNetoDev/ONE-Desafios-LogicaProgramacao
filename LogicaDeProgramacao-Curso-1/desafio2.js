//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia_semana__usuario = prompt('Insira o dia da semana: ');
console.log(`Verficando a inserção do dia da semana do usuário Desafio (Q1): ${dia_semana__usuario}`);

if (dia_semana__usuario == 'Sábado' || dia_semana__usuario == 'Domingo'){
    alert('Bom fim de Semana!');
} else {
    alert('Boa semana!');
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero__usuario = prompt('Insira um número qualquer e descubra se é postivo ou negativo: ');
console.log(`Verficando a inserção do número do usuário (Q2): ${numero__usuario}`);

if (numero__usuario >= 0){
    alert(`O número ${numero__usuario} é positivo!`);
} else {
    alert(`O número ${numero__usuario} é negativo!`);
}

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let PONTUACAO = 100;
let pontuacao__jogador = prompt('Insira a sua pontuação: ');
console.log(`Verficando a inserção da pontuação do usuário (Q3): ${pontuacao__jogador}`);

if (pontuacao__jogador >= PONTUACAO){
    alert(`Parabéns, você venceu!`);
} else {
    alert('Tente novamente para ganhar. (Mín. 100 Pts.)');
}

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo__usuario = prompt('Insira o seu Saldo: ');
console.log(`Verficando a inserção do saldo do usuário: ${saldo__usuario}`);
alert(`Saldo Atual: ${saldo__usuario}R$`);
//5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.\
let nome__usuario = prompt('Insira seu nome: ');
console.log(`Verificando a inserção do nome do usuário: ${nome__usuario}`)
let confirmar_nome__usuario = 0;
// estrutura de repetição para inserir apenas 0 ou 1
do{
    let confirmar_nome__usuario = prompt(`Seu nome é ${nome__usuario}? (1 - Sim | 0 - Não)\nDigite aqui: `);
    console.log(confirmar_nome__usuario);

    if(confirmar_nome__usuario == 1){
        console.log('Entrou no if == 1. Nome é verdadeiro')
        alert(`Seja bem vindo ${nome__usuario}!`);
    } else if (confirmar_nome__usuario == 0){
        console.log('Entrou no if == 0. Nome é verdadeiro, mas ele está mentindo')
        alert(`Deixa de mentiraaa, seu nome é ${nome__usuario} SIM!!`);
        alert(`Seja bem vindo ${nome__usuario} :)`);
    } else {
        console.log('Entrou no else. Opção inválida')
        alert('Opção inválida. Tente novamente.');
    }
} while(confirmar_nome__usuario != 1 && confirmar_nome__usuario != 0);


