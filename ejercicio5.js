// Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por 
// segundo cada uno de sus caracteres. 
// Al finalizar, debe invocar a la siguiente función que se le pasa también  
// como parámetro: const fin = () => console.log('terminé')

const mostrarLetras = (palabra, ms, cb) => {
  let count = 0;
  const intervalId = setInterval(() => {
      console.log(palabra[count]);
      count++;
      if (count == palabra.length) {
        clearInterval(intervalId);
        cb();
      }
    },
    ms);
};

mostrarLetras("estufa", 1000, () => {
  console.log("termine")
});

