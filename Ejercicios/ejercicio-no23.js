const objetoArray = (array) => {
    if (!array) return console.warn("No ingresaste el array.");

    var objetoArray = {
      pares: [],
      impares: [],
    };

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 1) {
        objetoArray.pares.push(array[i]);
      } else {
        objetoArray.impares.push(array[i]);
      }
    }

    console.log(objetoArray);
  };

  objetoArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);