const factorial = (numero) => {
  if (!numero) return console.warn('No ingresaste una numero.');

  resultado = 1;

  for (i = numero; i > 1; i--) {
    resultado = resultado * i;
  }

  return resultado;
};

console.log(factorial(5));
