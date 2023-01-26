/*A variável do tipo const é um variável global que não sofre alteração no seu valor por ser uma constante*/

//Ex:
const num = 10;
//num = 5;//Se remover essa tentativa de alterar o valor o erro vai sumir.
console.log(`Valor da variável num ${num}`);//Retorna um erro por tentar fazer uma Atribuição a variável constante.
//Sem a tentativa de atribuição a variável o valor vai ser retornado normalmente mostrando o valor de 10.