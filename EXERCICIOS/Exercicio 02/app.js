const nome = 'Deivison';
const sobrenome = 'Neri';
const idade = 28;
const peso = 78;
const altura = 1.8;
let anoNascimento = 2025 - idade;
let imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e se IMC é de ${imc}. E nasceu em ${anoNascimento}`);