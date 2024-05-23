// * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están
//equilibrados.
// * - Equilibrado significa que estos delimitadores se abren y cierran en orden y de forma correcta.
// * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
// * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
// * - Expresión no balanceada: { a * ( c + d ) ] - 5 }

const isBalanced = (string) => {
  let resultOne = [];
  let resultTwo = [];
  let resultThree = [];
  for (const item of string) {
    if (item === "[") {
      resultOne.push(item);
    } else if (item === "]") {
      if (resultOne.length === 0) {
        return "NOT BALANCED";
      }
      resultOne.pop(item);
    }
    if (item === "(") {
      resultTwo.push(item);
    } else if (item === ")") {
      if (resultTwo.length === 0) {
        return "NOT BALANCED";
      }
      resultTwo.pop(item);
    }
    if (item === "{") {
      resultThree.push(item);
    } else if (item === "}") {
      if (resultThree.length === 0) {
        return "NOT BALANCED";
      }
      resultThree.pop(item);
    }
  }
  if (
    resultOne.length === 0 &&
    resultTwo.length === 0 &&
    resultThree.length === 0
  ) {
    return "BALANCED";
  } else {
    return "NOT BALANCED";
  }
};

console.log(isBalanced("{a + b [c] * (2x2)}}}}"));
console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"));
console.log(isBalanced("{ a * ( c + d ) ] - 5 }"));
console.log(isBalanced("{a^4 + (((ax4)}"));
console.log(isBalanced("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"));
console.log(isBalanced("{{{{{{(}}}}}}"));
console.log(isBalanced("[a+b*(c*4)]"))
console.log(isBalanced("(a"));
console.log(isBalanced(")("));
console.log(isBalanced("][a+b*(c*4)]"))
