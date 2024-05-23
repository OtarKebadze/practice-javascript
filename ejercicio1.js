// Escribir una función, llamada resolverEnSegundos, que reciba como 
// argumento la cantidad de segundos y devuelva una promesa que se resolverá en la 
// cantidad de tiempo provista.


// Escribir una segunda función, llamada imprimirConPromesa, que reciba como argumento un texto. 
// La función debe imprimir en pantalla, y luego resolver la promesa. 
// Si el texto está vacío, la promesa debe rechazarse.

// Ejecutar la función resolverEnSegundos, y una vez terminada, 
// llamar a la función imprimirConPromesa con un texto. Luego, imprimir en pantalla el texto 
// 'Proceso terminado'.

const resolverEnSegundos = (tiempo)=> {
return new Promise((resolve)=>{
    setTimeout(() => {
    resolve()
    }, (tiempo * 1000));
});
};

const imprimirConPromesa = (texto)=>{
    return new Promise((result, reject)=>{
        if (!texto) {
            return reject("ESTA VACIO")
        } else {
            console.log(texto)
            result()
        }
    })
}

console.log(resolverEnSegundos())
resolverEnSegundos(1)
.then(()=> imprimirConPromesa("hola"))
.then(()=> console.log("PROMESA TERMINADO"))
.catch(error => console.log(error))