const eliminarDuplicidad = (array) => {
  if (!array) return console.warn("No ingresaste el array.");

  let resultado = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });

  console.log(resultado);
};

eliminarDuplicidad([1, 1, 2, 2, 5, 5, 4, 4, 6, 6, 8, 8, "a", "a"]);
