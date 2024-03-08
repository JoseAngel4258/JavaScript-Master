const arrayCuadrado = (numeros) => {
  if (!numeros) return console.warn("No ingresaste los números.");

  let myFunc = (numeros) => Number(numeros);

  let intArr = Array.from(String(numeros), myFunc);
  array = [];

  intArr.forEach((obj) => {
    array.push(Number(obj * obj));
  });

  console.log(array);
};

arrayCuadrado();
