/*O escopo global você pode mudar o valor dela e resgatar o valor da variável em qualquer lugar caso ela seja declarada como let ou var*/

//Ex:

//Escopo Global
let name = 'Nome Completo';

/*Global: O escopo global é o espaço que está fora de qualquer classe, função ou namespace. Todas as variáveis declaradas
neste espaço podem ser acessadas a qualquer momento e em qualquer lugar do seu código.*/

const mostrarName= ()=>{
    console.log(name);
}
mostrarName();

/*Perceba que você não passe nada como parâmetro para a função mostrarName, ela consegue acessar a variável name, pois
ela foi declarada no escopo global.*/
