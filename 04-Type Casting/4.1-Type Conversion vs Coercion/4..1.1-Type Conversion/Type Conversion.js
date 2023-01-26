/*O método global Number() converte uma variável (ou um valor) em um número.*/
//Ex: Uma string numérica ("3.14") é convertida em um número (3.14).
//Mas uma string "" ela é convertida para zero e uma string não númerica é convertida em NaN (Não é um número).

mostrarPI = ()=>{
    document.write(
        Number("3.14") + "<br>" +
        Number(Math.PI)//Vai retornar o valor normal de PI pois o javascript consegue reconhecer que mesmo o 
        //tipo do dado ser do tipo string ela se refere a um dado do tipo number.
    )
}
mostrarPI();

//Alguns Métodos de conversão

//Númericos

Number() //Retorna um número, convertido de seu argumento
parseInt() //Analisa uma String e retorna um inteiro
parseFloat() //Analisa uma String e retorna um número de ponto flutuante (Ex: 3.14).

//Convertendo Números em Strings

//O método global String()pode converter números em strings.
//OBS: Pode ser usado apenas para qualquer variável do tipo number, literal, variáveis ou expressões.

//Ex:

String(x)// retorna uma string de uma variável numérica x
String(123)// retorna uma string de um número literal 123

//Mas o método Number toString() faz a mesma coisa.