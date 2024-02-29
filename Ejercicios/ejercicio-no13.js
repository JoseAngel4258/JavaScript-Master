const parOImpar = (numero) => {
  if (!numero) return console.warn('No ingresaste un numero.');

  for (i = 0; i < numero; i++) {
    if (numero % 2 !== 1) {
      texto = 'Numero Par';
    } else {
      texto = 'Numero Impar';
    }
  }

  return texto;
};
console.log(parOImpar(9));
