// * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
// * Hecho esto, imprime los números primos entre 1 y 100.

const isPrimer=(num)=>{
    if (num<2) {
        return false
    }else{
        for (let i = 2; i < num ; i++) {
            if (num%i===0) {
                return false
            }
        }
        return true
    }

}
const showPrimer=(num)=>{
    let primerArr=[];
    for (let i = 2; i < num; i++) {
    if (isPrimer(i))  primerArr.push(i)
    }
    
    return primerArr
 }

 console.log(showPrimer(100));