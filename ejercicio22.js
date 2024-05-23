// Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean)
// según sean o no palíndromos.
// * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de
// derecha a izquierda.
// * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
// * Ejemplo: Ana lleva al oso la avellana.

const isPalindrome = (string) => {
  let text = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === ".") {
      continue;
    }
    text += string[i].toLowerCase();
  }
  let firstText = text.split("").join("");
  let secondText = text.split("").reverse().join("");
    firstText === secondText ? console.log(true) : console.log(false)
  
};

isPalindrome("Ana lleva al oso la avellana.");
isPalindrome("¿Que os ha parecido el reto?");
