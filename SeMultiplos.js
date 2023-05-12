/* Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao
Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.*/

let n1 = 24, n2 = 6, aux;

aux = n1 % n2;

console.log("#==============================================#");
if (aux == 0){
    console.log(n1 + " e " + n2 + " são múltiplos! ");
    console.log("#==============================================#");
    }
else{
    console.log(n1 + " e " + n2 + " não são múltiplos! ");
    console.log("#==============================================#");
    }


    let n11 = 25, n21 = 6, aux1;

    aux = n11 % n21;
    
    console.log("#==============================================#");
    if (aux1 == 0){
        console.log(n11 + " e " + n21 + " são múltiplos! ");
        console.log("#==============================================#");
        }
    else{
        console.log(n11 + " e " + n21+ " não são múltiplos! ");
        console.log("#==============================================#");
        }