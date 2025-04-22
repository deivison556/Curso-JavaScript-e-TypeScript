/* OPERADORES ARITMÉTICOS

  + Soma
  - Subtração
  / Divisão
  * Multiplicação
  % Resto da divisão
  ** Potenciação

*/

/* ORDEM DE PRECEDENCIA DOS OPERADORES ARITMETICOS

  1° ()
  2° ** Potenciação
  3° * Multiplicação, / Divisão,  % Resto da Divisão
  4° + Soma e Subtração -

*/

const num1 = 5; 
const num2 = 2; 
const num3 = 10; 
console.log((num1 + num2) * num3);


/* SOBRE INCREMENTO E DECREMENTO 

  Incremento = ++
  Decremento = --

*/

let contador = 1;
contador++; // o valor da variavel +1 = 2
contador++; // o valor da variavel +1 = 3
contador++; // o valor da variavel +1 = 4
contador++; // o valor da variavel +1 = 5
console.log(contador) // resultado 5

let contador2 = 10;
contador2--; // o valor da variavel 10 - 1 = 9
contador2--; // o valor da variavel 9 - 1 = 8
contador2--; // o valor da variavel 8 - 1 = 7
contador2--; // o valor da variavel 7 - 1 = 6
console.log(contador2) // resultado 6

/* SOBRE OPERADORES DE ATRIBUIÇÃO 

  +=
  -=
  /=
  *=
  **=
  %=

*/
let contadorNovo = 0;
contador += 2; // contador = contador + passo (50);
contador += 2; // 4
contador += 2; // 6
console.log(contadorNovo) // resultado 6

//Convertendo uma string para um numero
const num5 = 10;
const num6 = Number('5');
console.log(num5 + num6); // resultado 15
console.log(typeof num6); // tipo number
