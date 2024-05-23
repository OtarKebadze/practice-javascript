// Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
//  * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
//  * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y
//  dos espacios entre palabras "  ".
//  * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
let morse = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  ch: "----",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  ñ: "--.--",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "(": "-.--.",
  ")": "-.--.-",
};
const transform = (expression) => {
  if (/^[a-zA-Z0-9.,?"/\s]*$/.test(expression)) {
    let arr = [];
    let newExp = expression.toLowerCase();
    let exp = newExp.split("");
    for (let i = 0; i < exp.length; i++) {
      if ((exp[i] === "c" || exp[i] === "C") && exp[i + 1] === "h") {
        arr.push(morse.ch);
        i++;
      } else if (exp[i] === " ") {
        arr.push("0");
      } else {
        arr.push(morse[`${exp[i]}`]);
      }
    }
    let transformed = arr.map((elem) => {
      if (elem !== "0") {
        return elem + " ";
      } else {
        return " ";
      }
    });
    console.log(transformed.join(""));
  } else if (expression.includes(".") || expression.includes("-")) {
    let arr = [];
    let exp = expression.split("  ").join(" 0 ").split(" ");
    let obj = Object.entries(morse);
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === "0") {
      arr.push(" ")
      }else{
      obj.forEach(el=>{
      if (el[1]===exp[i]) {
      arr.push(el[0])
      }
      })
      }
    }
    let word=arr.join("")
    console.log(word)
  } else {
    console.log("UNACCEPTED VALUE");
  }
};

transform("Chocapic. Es una marca de cereales?");
transform("---- --- -.-. .- .--. .. -.-. .-.-.-  . ...  ..- -. .-  -- .- .-. -.-. .-  -.. .  -.-. . .-. . .- .-.. . ... ..--..");
