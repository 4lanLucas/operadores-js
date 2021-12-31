function entrada(num1,num2){
    var resultado;

     if (num1 == num2){
        soma(num1,num2);
        console.log("Ambos os números " + num1 + " e " + num2 + " são iguais, "  + resultado);
    } else {
        soma(num1,num2);
        console.log("Ambos os números " + num1 + " e " + num2 + " são diferentes, " + resultado);
     }
}
function soma(a,num1,num2){ 
    a = num1 + num2;
    if (a > 10){
        resultado = ("sua soma é maior que 10 ");
    } else if(a < 10){
        resultado = ("sua soma é menor que 10 ");
    } else {
        resultado = ("sua soma é igual a 10 ");
    }
    if (a > 20){
        resultado += ("e maior que 20");
    } else if(a < 20){
        resultado += ("e menor que 20");
    } else {
        resultado += ("e igual a 20 ");
    }
}
console.log(entrada(1,2));