// Definir variables variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla

let nombre = "Pepe";
let edad = 25; 
let precio= 99.99;
let series= ["Dark"," Mr. robot"," Castlevania"];

console.log(`
Me llamo ${nombre} y tengo ${edad} años
y mis series favoritas son ${series}
Precio = ${precio.toFixed(2)}
`)

edad++;
let nuevoArray = [...series,"Friends"]


console.log(`
Me llamo ${nombre} y tengo ${edad} años
y mis series favoritas ahora son ${nuevoArray}
Precio = ${precio.toFixed(2)}
`)