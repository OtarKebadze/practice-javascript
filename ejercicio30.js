// * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
// * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.


const isArmstrongNumber = (num) =>{
 if (num < 0) {
    return ' NUMBER MUST BE POSITIVE '
 } else {
    let numString = num.toString();
    let chars = numString.split('');
    let result = chars.reduce((res,acc)=>{
        return res + Math.pow(acc,3)
    },0) 
    if (num === Number(result)) {
        return ' NUMBER IS ARMSTRONG '
    }else{
        return ' NUMBER IS NOT ARMSTRONG '
    }
 }
}


console.log(isArmstrongNumber(153))
console.log(isArmstrongNumber(2))
console.log(isArmstrongNumber(300))
console.log(isArmstrongNumber(-153))
console.log(isArmstrongNumber(407))
console.log(isArmstrongNumber(1500))