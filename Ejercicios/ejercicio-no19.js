const validarCorreo = (nombre) => {
  if (!nombre) return console.warn("No ingresaste ningun nombre.");

  var nombreValido = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+([ '-][A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;

  return nombreValido.test(nombre);
};

console.log(ValidarCorreo("José Ángel Bravo Romero"));
