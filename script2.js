function recebe(n1,n2){
    num1 = n1;
    num2 = n2;
    return result1() + result2();
}
function result1(){
     if (num1 !== num2) {
        return ("os números "+ num1 + " e "+ num2 +" são diferentes ");
     } else {
        return ("os números "+ num1 + " e "+ num2 +" são iguais ");
     }
}
function result2(){
   let rs1; 
   let rs2;
   var soma = (num1 + num2);
    if (soma > 10){
      rs1 = "maior";
   } else if (soma < 10){
      rs1 = "menor";
   } else {
      rs1 = "igual";
   } 
   if (soma > 20){
      rs2 = "maior";
   } else if(soma < 20){
      rs2 = "menor";
   } else {
      rs2 = "igual";
   }
   return "sua soma é " + soma + " que é " + rs1 + " que 10, é "+ rs2 +" de 20";
}
console.log(recebe(5,7));