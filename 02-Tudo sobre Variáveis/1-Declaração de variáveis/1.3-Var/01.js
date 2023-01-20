/*As variável do tipo var são variáveis que são sempre globais independente do escopo */
//Ex:

var num = 10;
console.log(num);

const mudarNum = ()=>{
    return num = 5;
}
console.log(mudarNum());
//Mesmo que a variável esteja dentro de um escopo ela consegue ser alterada globalmente
//O valor ruim que é um dipo de variável que pode ser alterada em qualquer lugar podendo causar problemas futuros o mais recomendado
//é usar const ou let