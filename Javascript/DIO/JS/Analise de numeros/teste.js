var input = require("fs").readFileSync("stdin","utf8");
var lines = input.split('\n');

//programa que lê 5 numeros e analisa qnts nums sao pares, impares, positivos e negativos
numero = Array(5); 

numero[0] = -5;
numero[1] = 0;
numero[2] = -3;
numero[3] = -4;
numero[4] = 12;

pares = numero.filter(value => value % 2 == 0);  //numeros pares
impares = numero.filter(value => value % 2 != 0); //numeros impares 

positivos = numero.filter(value => value > 0); //filtra array caso eles sejam maiores que 0 == positivos e salva na var "positivos"
negativos = numero.filter(value => value < 0); // filtra numeros negativos 

console.log(pares.length + " par(es)");
console.log(impares.length + " impar(es)");

console.log(positivos.length + " positivo(s)");
console.log(negativos.length + " negativo(s)");