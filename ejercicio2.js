// Crear la función escribirEnArchivo 
// que reciba un nombre de archivo y un texto a escribir. 
// Esta función debe devolver una promesa que se completará cuando el archivo 
// termine de escribirse.

const fs = require("fs")


const escribirEnArchivo = (nombre,texto) => {
    return new Promise ((result,reject)=>{
        fs.writeFile(nombre , texto,  (error)=>{
        if (error) reject(error)
        else return result()
        })
    })
}


escribirEnArchivo("hola.txt","HOLA COMO ESTAS")
.then(()=>console.log("FINALIZADO"))