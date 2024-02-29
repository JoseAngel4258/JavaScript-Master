const eliminarPatron = (texto) => {
  if (!texto) return console.warn('No ingresaste una texto.');
  var er = /[xyz|xy]/g;
  texto = texto.replace(er, '');

  return texto;
};

console.log(eliminarPatron('xyzHola xyzmuxyndo xy'));
