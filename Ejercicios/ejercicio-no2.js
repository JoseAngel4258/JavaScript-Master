function cortarCadena(cadena) {
  cadenaACortar = cadena;

  return cadenaACortar.slice(0, -5);
}

console.log(cortarCadena('Hola mundo'));
