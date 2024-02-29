console.log(arrayCadena('Hola mundo que tal mucho gusto', ' '));

function arrayCadena(cadena, divisiones) {
  arrDeCadenas = [];

  arrDeCadenas = cadena.split(divisiones);

  return arrDeCadenas;
}
