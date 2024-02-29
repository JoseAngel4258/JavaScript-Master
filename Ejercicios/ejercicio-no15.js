 const binarioADecimal = (num, base) => {
        if (!num || !base)
          return console.warn(
            'No ingresaste uno de los datos necesario para realizar la conversión.'
          );

        if (base === 2) {
          const reversedArray = num.toString().split('').reverse().map(Number);

          let newArray = [];

          multiplo = 1;

          if (base === 2) {
            i = 0;
            do {
              newArray.push(reversedArray[i] * multiplo);
              multiplo = multiplo * 2;
              i++;
            } while (i < reversedArray.length);
          }

          var suma = 0;
          newArray.forEach(function (sumados) {
            suma += sumados;
          });
          return suma;
        }

        if (base === 10) {
          let newArray = [];

          resultado = 0;

          while (total > 0) {
            division = num / 2;
            newArray.push(division);
          }
          return newArray;
        }
      };

      console.log(binarioADecimal(11, 10));