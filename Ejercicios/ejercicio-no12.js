const numeroDivisible = (numero) => {
  if (!numero) return console.warn('No ingresaste un numero.');

  var comparacion;
  for (i = 1; i < numero; i++) {
    if (numero % 2 !== 1) {
      comparacion = false;
    } else {
      comparacion = true;
    }
  }

  return comparacion;
};
console.log(numeroDivisible(3));
