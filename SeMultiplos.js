/* Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao
Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.*/

let n1 = 24, n2 = 6, aux;

aux = n1 % n2;

console.log("#==============================================#");
if (aux = 1){
    console.log(n1 + " " + n2 + " são múltiplos! ");
    console.log("#==============================================#");
    }
else{
    console.log(n1 + " " + n2 + " não são múltiplos! ");
    console.log("#==============================================#");
    }