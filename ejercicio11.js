// *
// * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
// * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
// * NO hace falta comprobar que ambas palabras existan.
// * Dos palabras exactamente iguales no son anagrama.


const compareWords = (wordOne, wordTwo)=>{
    let containOne = wordOne.toLowerCase().split("").sort().join("");
    let containTwo = wordTwo.toLowerCase().split("").sort().join("");
    if (wordOne === wordTwo) {
    return false
    }else if (containOne===containTwo){
    return true
    }
    return "NO SIMILAR WORDS OR ANAGRAM" 
}
console.log(compareWords("Less","sels"));