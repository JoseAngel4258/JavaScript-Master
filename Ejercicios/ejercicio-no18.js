const contador = (texto) => {
  if (!texto) return console.warn("No ingresaste ningun texto.");

  var er = /[^A-Za-z0-9]/g;
  texto = texto.toLowerCase().replace(er, "");

  expRegVocales = /[aeiouAEIOU]/g;
  foundVocales = texto.match(expRegVocales);
  numeroVocales = foundVocales.length;

  expRegConsonantes = /[^aeiouAEIOU]/g;
  foundConsonantes = texto.match(expRegConsonantes);
  numeroConsonantes = foundConsonantes.length;

  return `Vocales: ${numeroVocales}, consonantes: ${numeroConsonantes}`;
};

console.log(contador("Hola Mundo"));
