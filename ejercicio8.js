// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y 
//el valor asociado a cada clave será la cantidad de veces que salió dicho número. 
//Representar por consola los resultados.

const obj = {};

for (let i = 1 ;i < 10000; i++){
    const numeroAleatorio=Math.floor(Math.random()*20)+1; 
    if (obj[numeroAleatorio]) {
        obj[numeroAleatorio]++
    } else {
        obj[numeroAleatorio]=1
    }
}

console.log(obj)
