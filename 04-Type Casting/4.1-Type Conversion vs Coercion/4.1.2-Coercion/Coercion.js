/*A coerção de tipo é a conversão automática ou implícita de valores de um tipo de dados para outro (como strings em números)*/

//Ex:

let num1 = "10";
let num2 = 20;
let soma = num1 + num2;

console.log(soma);//Em vez de somar ele vai apenas juntas os valores das duas variáveis ficando 1020

soma = Number(num1) + num2;

console.log(soma);//Desse jeito ele vai converter a variável num1 que é do tipo string numérica para apenas do tipo númérica
//e fazer a somar normalmente assim retornando o resultado da soma 30.