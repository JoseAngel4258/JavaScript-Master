const objetoArray1 = (array) => {
  if (!array) return console.warn("No ingresaste el array.");

  objetoArray = {
    asc: array.sort((a, b) => {
      return a - b;
    }),
    desc: array.sort((a, b) => {
      return b - a;
    }),
  };

  console.log(objetoArray);
};

objetoArray1([36, 5, 23]);

 /* function ordenarArray(arrayDesordenado) {
  // Crear una copia del array para no modificar el original
  let ascendente = arrayDesordenado.slice().sort((a, b) => a - b);
  let descendente = arrayDesordenado.slice().sort((a, b) => b - a);

  // Devolver un objeto con ambos arrays ordenados
  return {
    ascendente,
    descendente,
  };
}

// Ejemplo de uso:
let numerosDesordenados = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let arraysOrdenados = ordenarArray(numerosDesordenados);

console.log(arraysOrdenados); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9] */
