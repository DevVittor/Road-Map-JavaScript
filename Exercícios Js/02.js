//02-Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao 
//nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let usuario = prompt("Usuário");
let senha = prompt("Senha");

while(usuario == senha || usuario === senha){
    alert('O nome de usuário tem que ser diferente da senha');
    usuario = prompt("Usuário");
    senha = prompt("Senha");
}
alert("Conta Criada com sucesso!")