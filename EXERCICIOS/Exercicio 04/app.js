const nome = prompt('Digite o seu nome completo:');

document.body.innerHTML = `O seu nome é: ${nome} </br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letas </br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} </br>`;
document.body.innerHTML += `Qual o primeiro índice da letra i no seu nome? ${nome.indexOf('i')} </br>`;
document.body.innerHTML += `Qual o ultimo índice da letra o no seu nome? ${nome.lastIndexOf('i')} </br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} </br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split("  ")} </br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} </br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} </br>`;

