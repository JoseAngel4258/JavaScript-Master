const transformarTemp = (temp, grado) => {
  if (!temp) return console.warn('No ingresaste la temperatura.');
  if (!grado) return console.warn('No ingresaste el método de medición.');

  if (grado === 'F') {
    temp1 = ((temp - 32) * 5) / 9;
    grado2 = 'Fahrenheit';
    grado1 = 'Celsius';
    texto = `La temperatura de ${temp} grados ${grado2} es equivalente a ${temp1} grados ${grado1}`;
  }
  if (grado === 'C') {
    temp1 = (temp * 9) / 5 + 32;
    grado2 = 'Celcius';
    grado1 = 'Fahrenheit';
    texto = `La temperatura de ${temp} grados ${grado2} es equivalente a ${temp1} grados ${grado1}`;
  }

  return texto;
};
console.log(transformarTemp(4, 'C'));
