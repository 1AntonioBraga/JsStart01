/* Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em
anos, meses e dias.
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com
30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns
dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio
matemático simples*/


let idadeDias = 400, anos, restoPMeses, meses, restoPDias, dias; // Variáveis letra A
 
anos = idadeDias / 365;
restoPMeses = idadeDias % 365;
meses = restoPMeses/30; 
restoPDias = restoPMeses % 30;
dias = restoPDias;

console.log("#===========================================================================================================#");
console.log(parseInt(anos) + " ano(s)");
console.log(parseInt(meses) + " mes(es)");
console.log(parseInt(dias) + " mes(es)");
console.log("#===========================================================================================================#");

let idadeDias1 = 800, anos1, restoPMeses1, meses1, restoPDias1, dias1; // Variáveis letra B


anos1 = idadeDias1 / 365;
restoPMeses1 = idadeDias1 % 365;
meses1 = restoPMeses1/30; 
restoPDias1 = restoPMeses1 % 30;
dias1 = restoPDias1;
console.log("#===========================================================================================================#");
console.log(parseInt(anos1) + " ano(s)");
console.log(parseInt(meses1) + " mes(es)");
console.log(parseInt(dias1) + " mes(es)");
console.log("#===========================================================================================================#");

let idadeDias2 = 30, anos2, restoPMeses2, meses2, restoPDias2, dias2; // Variáveis letra C


anos2 = idadeDias2 / 365;
restoPMeses2 = idadeDias2 % 365;
meses2 = restoPMeses2/30; 
restoPDias2 = restoPMeses2 % 30;
dias2 = restoPDias2;
console.log("#===========================================================================================================#");
console.log(parseInt(anos2) + " ano(s)");
console.log(parseInt(meses2) + " mes(es)");
console.log(parseInt(dias2) + " mes(es)");
console.log("#===========================================================================================================#");