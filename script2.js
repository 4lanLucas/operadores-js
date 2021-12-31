function recebe(n1,n2){
    num1 = n1;
    num2 = n2;
    return result1();
}
function result1(){
     if (num1 !== num2) {
        return ("os números "+ num1 + " e "+ num2 +" são diferentes");
     } else {
        return ("os números "+ num1 + " e "+ num2 +" são iguais");
     }
}

console.log(recebe(1,2));