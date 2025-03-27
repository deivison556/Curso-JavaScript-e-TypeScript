/* Regras de declaração de variaveis

  - Não podemos criar váriaveis com palavras reservadas
  - Variaveis precisam ter nomes significativos
  - Não pode começar o nome de uma variável com um número
  - Não podem conter espaços ou tracos apenas _
  - Utilizamos camelCase 
  - As variaveis são Case-sensitive
  - Não podemos redeclarar variáveis com let
  - NÃO UTILIZAR VAR, UTILIZE LET.
*/

let nome = 'João';

console.log(`${nome}, nasceu em 1984.`);
console.log(`Em 2000, ${nome} conheceu Maria.`);
console.log(`${nome} casou-se com Maria em 2012.`);
console.log(`Maria teve 1 filho com, ${nome} em 2015.`);
console.log(`O filho de ${nome}, se chama Eduardo.`);


// Exemplo utilizando camelCase
let nomeCliente = 'José Teixeira';
console.log(nomeCliente);