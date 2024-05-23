// Realizar un programa que:
// A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
// B) Lea nuestro propio archivo de programa y lo muestre por consola.
// C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).




const fs = require("fs");


const archivoFYH = ()=>{
    try {
        
            let fecha= new Date();
            fs.writeFileSync("fyh.txt", JSON.stringify(fecha))
            let lectura = fs.readFileSync("fyh.txt", "utf-8")    
            return lectura
    
    } catch (error) {
    return new Error("Ha habido un error")
    }
}
console.log(archivoFYH());