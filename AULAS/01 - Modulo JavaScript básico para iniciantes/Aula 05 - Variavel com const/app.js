/* Regras de declaração de constantes

  - Não podemos criar constantes com palavras reservadas
  - Constantes precisam ter nomes significativos
  - Não pode começar o nome de uma constantes com um número
  - Não podem conter espaços ou tracos apenas _
  - Utilizamos camelCase 
  - As variaveis são Case-sensitive
  - Não podemos modificar o valor de uma constante
  - NÃO UTILIZAR VAR, UTILIZE CONST.
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(resultadoDuplicado);
console.log(typeof resultadoDuplicado);
