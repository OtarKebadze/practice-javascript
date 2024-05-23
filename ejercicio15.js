// * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
// * - Los signos de puntuación no forman parte de la palabra.
// * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
// * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.

const wordCounter = (string) => {
  let words = string.toLowerCase().replaceAll(",", "").split(" ");
  let count = {};
  words.forEach(e => {
    if (count[`${e}`] ) {
      count[`${e}`] = count[`${e}`]+1;
    }else{
      count[`${e}`] = 1;
    }
  });
  console.log(count);
};

wordCounter("hola me llamo Oto, pero mi nombre completo es Oto Kebadze, pero igual pueden decirme Oto");
