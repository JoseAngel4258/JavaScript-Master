const buscarPalabra = (texto, palabra) => {
  if (!texto) return console.warn('No ingresaste un texto.');
  if (!palabra) return console.warn('No ingresaste una palabra a buscar.');

  var arr = [];
  arr = texto.split(' ');
  var contador = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === palabra) {
      contador++;
    }
  }

  console.log(`La palabra: '${palabra}' se repite ${contador} veces.`);
};

buscarPalabra('hola hola hola hola hola hola hola adios', 'hola');
