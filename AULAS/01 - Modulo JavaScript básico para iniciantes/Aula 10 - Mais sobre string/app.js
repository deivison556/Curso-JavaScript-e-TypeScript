//              01234567   
let umaString = "Um texto";

console.log(umaString[4]); // pegando o indice a letra 'e'
console.log(umaString[-1]); // mostrara underfined
console.log(umaString.charAt(6)) // pegando o indice a letra 't'

// PEGANDO INDICE DA PALAVRA TEXTO
console.log(umaString.indexOf('texto')); // retorna o valor 3, já que texto começa no 3

// lastIndexOf começa a busca da posição de trás para frente
console.log(umaString.lastIndexOf('e')); // retorna o valor 4

// CHECANDO O TAMANHO DE UMA STRING
//              0123456789   
let novaFrase = 'O rato roeu a roupa do rei de roma.';
console.log(novaFrase.length); // resultado 35 caracteres


console.log(novaFrase.slice(2, 6)); // fatia string mostrando 'rato' inicia no 2 e fim no 6


// FORMAS DE CONCARTENA
console.log(umaString.concat(' ', 'em', ' ', 'um')) //concatenando
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} formando uma nova frase`);


// Para deixar uma string em letra maiúsculas e minúsculas
console.log(umaString.toUpperCase);
console.log(umaString.toLowerCase);


let frase = 'Mais sobre string no JS';
console.log(frase);

