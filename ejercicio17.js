// Crea un programa se encargue de transformar un número decimal a binario
// sin utilizar funciones propias del lenguaje que lo hagan directamente.

/**
 * 
 * @param {number} num  any number, if decimal rounds to nearest number
 * @returns num transformed in binary
 */
const toBinary = (num) =>{
    if (isNaN(num) || num < 0) return 'CANT SOLVE';
    console.log(Math.round(num).toString(2))
}

toBinary(1.1)