const promedio = (array) => {
    if (!array) return console.warn("No ingresaste el array.");

    var num = 0;

    array.forEach((el) => (num = num + el));

    console.log(`El promedio de tu array es ${num / array.length}.`);
  };

  promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);