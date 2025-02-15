// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de 
// acuerdo a la hora actual: 
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'. 
// De 20 a 5 hs será 'Buenas noches!'.

// Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.


//--------------------------- HTTP ----------------------------

const http = require('http');
const PORT = 8081;

const server = http.createServer((req,res)=>{
    const hora = new Date().toTimeString();
    if (hora > 6 && hora < 12) {
        return res.end("BUENOS DIAS")
    }else if (hora > 13 && hora < 19) {
        return res.end("BUENOS TARDES")
    } else {
        return res.end("BUENOS NOCHES")
    }
});

server.listen(PORT,()=>{
    console.log(`ESCUCHOOOOO EN EL PUERTO:${PORT}` )
})


// --------------------------- EXPRESS ----------------------------

// Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
// A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
// B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
// C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
// { fyh: '11/1/2021 11:36:04' }


// const express = require("express");

// const app = express();
// const port = 8080;
// const html = "<h1 style = color:blue>Hola</h1>";
// const fecha = new Date().toDateString();
// const hora = new Date().toTimeString();
// let cont=0
// function contador(){
//     cont++
//     return cont
// }
// app.get("/", (req, res, next) => {
//   res.send(html);
// });
// app.get("/visitas", (req, res, next) => {
//   res.send("la cantidad de visitas es :" + contador());
// });

// app.get("/fyh", (req, res, next) => {
//   res.send({fecha:`${fecha}`, hora:`${hora}`});
// });

// app.listen(port, () => {
//   console.log("levantado");
// });