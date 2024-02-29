const invertirTexto = (texto) => {
  if (!texto) return console.warn('No ingresaste un texto.');

  var separarTexto = texto.split('');
  var invertirArreglo = separarTexto.reverse();
  var unirTexto = invertirArreglo.join('');
  return unirTexto;
};

console.log(invertirTexto('Hola Mundo Bonito'));
