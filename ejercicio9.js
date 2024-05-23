// Desarrollar un proyecto en node.js que declare un array de objetos
// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

// Aclaración: todos los valores monetarios serán expresados con 2 decimales

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const nombresProductos = (arr)=>{   
    let newArr= arr.map(prod => prod.nombre)
    return newArr.join();
}
console.log(nombresProductos(productos))

const precioTotal = (arr)=>{
    let newArr= arr.map(prod => prod.precio)  
    const precioTotal = newArr.reduce((acc, curr) => acc + curr); 
    return precioTotal.toFixed(2);
}

console.log(precioTotal(productos))

const precioPromedio = (arr)=>{
    let newArr= arr.map(prod => prod.precio)  
    const precioTotal = newArr.reduce((acc, curr) =>(acc + curr)); 
    const precioProm = (precioTotal/newArr.length).toFixed(2)
    return precioProm;
}

console.log(precioPromedio(productos))

const prodMayorPrecio = (arr)=>{
    let newArr= arr.map(prod => prod.precio)  
    let max = Math.max(...newArr)
    return max
}
console.log(prodMayorPrecio(productos))

const prodMenorPrecio = (arr)=>{
    let newArr= arr.map(prod => prod.precio)  
    let max = Math.min(...newArr)
    return max
}
console.log(prodMenorPrecio(productos))

const objetoProductos = ()=>{
    let obj={
    Productos:nombresProductos(productos),
    PrecioTotal:precioTotal(productos),
    PrecioPromedio:precioPromedio(productos),
    MenorPrecio:prodMenorPrecio(productos),
    MayorPrecio:prodMayorPrecio(productos),
}
    console.log(obj)
}

const datosProductos = ()=> {
    console.log(`
    Nuestros productos son: ${nombresProductos(productos)},
    suman un precio total de :${precioTotal(productos)},
    promediando un precio de:${precioPromedio(productos)},
    siendo el menor precio:${prodMenorPrecio(productos)}, y el mayor precio ${prodMayorPrecio(productos)};
    `)
}
objetoProductos();
datosProductos();
