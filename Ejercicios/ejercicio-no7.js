const palindrome = (palabra) => {
  if (!palabra) return console.warn('No ingresaste una palabra.');
  var er = /[^A-Za-z0-9]/g;
  palabra = palabra.toLowerCase().replace(er, '');

  var long = palabra.length;

  for (var i = 0; i < long / 2; i++) {
    if (palabra[i] !== palabra[long - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome('alilA'));
