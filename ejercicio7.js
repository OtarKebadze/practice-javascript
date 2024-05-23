// Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
// A) Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
//     Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
// B) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:



// C) Muestre por consola el objeto info luego de leer el archivo
// D) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
// E) Incluir el manejo de errores (con throw new Error)

const fs = require("fs");


fs.stat("package.json" , (error,stats)=>{
    if (error) {
    return new Error( error +": hay un error en el archivo")
    } else {
        let tamano = stats.size;
        fs.readFile("package.json", "utf-8", (error, contenido)=>{
        const info = {
                constenidoStr: contenido,
                contenidoObj: JSON.parse(contenido),
                size:tamano
            };
        fs.writeFile("info.txt", JSON.stringify(info), ()=>{
            console.log("termine")
        })
        })
    }
})
