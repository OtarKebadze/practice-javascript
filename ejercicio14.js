// Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
// * - La función recibirá por parámetro sólo UN polígono a la vez.
// * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
// * - Imprime el cálculo del área de un polígono de cada tipo.


function area(polygon){
    if (polygon.name==="triangle"){
        let area=(polygon.base*polygon.height)/2
        return (`The area of the ${polygon.name} is : ${area}`)
    }else if(polygon.name==="square" || polygon.name ==="rectangle"){
        let area=polygon.base*polygon.height
        return (`The area of the ${polygon.name} is : ${area}`)
    }
}

let triangle={name:"triangle",height:10,base:8}
let square={name:"square",height:10,base:10}
let rectangle={name:"rectangle",height:10,base:15}
console.log(area(rectangle));