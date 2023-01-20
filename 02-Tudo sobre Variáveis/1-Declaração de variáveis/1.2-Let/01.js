/*A variável do tipo let ela é do tipo global dependendo do escopo dela*/
//Ex:
let num = 10;
const mostraNum = ()=>{
    return num;
}
console.log(mostraNum());
//Mesmo ela sendo declarada fora do escopo da função mostraNum ela mesmo assim retorna o valor corretamente. Pois naquele lugar ela é glogal
//Mas se declarar uma variável apenas dentro do escopo ela vai retornar apenas dentro do escopo
//Ex:
const exibirNum = ()=>{
    let numero = 5;
    return numero;
}
console.log(exibirNum());
console.log(numero);//Variável numero não foi definidade, pois ela só existe dentro do escopo da função exibirNum fora disso ela não existe
//Você pode até declarar a mesma variável pois no escopo global ela não existe
//Ex:
let numero = 2;
console.log(numero);
//Ela vai retornar normalmente pois para o javascript é a primeira vez que essa variável foi declarada.