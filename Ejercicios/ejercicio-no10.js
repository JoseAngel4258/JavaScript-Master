const capicua = (numero) => {
  if (!numero) return console.warn('No ingresaste una numero.');

  numero = numero.toString();

  var long = numero.length;

  for (var i = 0; i < long / 2; i++) {
    if (numero[i] !== numero[long - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(capicua(5552555));
