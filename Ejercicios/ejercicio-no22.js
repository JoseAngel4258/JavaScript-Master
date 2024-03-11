const arrayMayorMenor = (array) => {
    if (!array) return console.warn("No ingresaste el array.");

    minimo = Math.min.apply(null, array);

    maximo = Math.max.apply(null, array);

    console.log(`El valor mínimo es ${minimo}, y el máximo es ${maximo}.`);
  };

  arrayMayorMenor([5, 1, -50, 100]);