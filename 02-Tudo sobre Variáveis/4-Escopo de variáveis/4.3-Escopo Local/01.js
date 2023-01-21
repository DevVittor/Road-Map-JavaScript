/*Local: O escopo local ele é mais restrito, as variáveis que são declaradas dentro desse escopo são acessados
somente dentro do escopo local*/

const showName = ()=>{
    //Escopo Local
    let name = 'Nome Completo';
    console.log(name);
}
console.log(showName());
//Ela só existe dentro do escopo showName