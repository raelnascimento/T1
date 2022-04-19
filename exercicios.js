//Exercicio1

/*
var v1=prompt("Entre com o valor da tabuda: ");

for (var i = 0; i <=10; i++) {
    document.write(" " + v1 + "*" + i + "=" + v1*i + "<br>");
    
}
*/

//Exercicio 2

/*
var v1=prompt("Entre com o primeiro valor: ");
var v2=prompt("Entre com o segundo valor: ");

var som= parseInt(v1)+parseInt(v2);
var sub= parseInt(v1)-parseInt(v2);
var mult= parseInt(v1)*parseInt(v2);
var div= parseInt(v1)/parseInt(v2);

document.write("A soma de " + v1 + "+" + v2 + "=" + som +"<br>");
document.write("A substração de " + v1 + "-" + v2 + "=" + sub +"<br>");
document.write("A multiplicação de " + v1 + "*" + v2 + "=" + mult +"<br>");
document.write("A divisão de " + v1 + "/" + v2 + "=" + div +"<br>");
*/

//Exercicio 3

/*
var v1= prompt("informe um valor: ");

if(v1>=0){
    document.write("Numero Positivo");
}else{
    document.write("Numero Negativo");
}
*/

//Exercicio 4

/*
var nome=prompt("Digite seu nome: ");
var endereco=prompt("Digite seu endereço: ");
var cidade=prompt("Digite sua cidade: ");

document.write("Nome: " +nome+ "<br>" + "Endereço: " + endereco + "<br>" + "Cidade: " + cidade );
*/

//Exercicio 5

/*
var v1= prompt("informe um valor: ");

v1 = parseInt(v1);

//A

if (v1%2 == 0) {
    document.write("Numero Par <br>");
} else {
    document.write("Numero Impar <br>");
}

//B 

if (v1 == 0) {
    document.write("Numero Neutro <br>");
} else if (v1 > 0) {
    document.write("Numero Positivo <br>");
} else {
    document.write("Numero Negativo <br>");
}

//C

var v2= prompt("informe o expoente: ");

v2 = parseInt(v2);

result = Math.pow(v1,v2);
document.write("Resultado: "+result);
*/