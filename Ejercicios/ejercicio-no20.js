const validarCorreo = (correo) => {
  if (!correo) return console.warn("No ingresaste ningun correo.");

  var correoValido =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  return correoValido.test(correo);
};

console.log(validarCorreo("josebravojs1810@gmail.com"));
