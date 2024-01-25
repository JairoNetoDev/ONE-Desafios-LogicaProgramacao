//1. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
console.log(`(D4-Q01) ${listaGenerica}`)
//2. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let listaLinguagensProgramacao = ['(D4-Q02) JavaScript','(D4-Q02) C','(D4-Q02) C++', '(D4-Q02) Kotlin', '(D4-Q02) Python'];
console.log(`(D4-Q02) ${listaLinguagensProgramacao}`);
//3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
listaLinguagensProgramacao.push('(D4-Q03) Java', '(D4-Q03) Ruby', '(D4-Q03) GoLang');
//4. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
listaGenerica.push('(D4-Q04) Jairo', '(D4-Q04) Manu', '(D4-Q04) Cleiton', '(D4-Q04) João');
console.log(`(D4-Q04) ${listaGenerica[0]}`);
//5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(`(D4-Q05) ${listaGenerica[1]}`);
//6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(`(D4-Q06) ${listaGenerica[listaGenerica.length - 1]}`);