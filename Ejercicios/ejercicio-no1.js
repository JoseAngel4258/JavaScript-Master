perro = {
  nombre: 'perro',
  edad: 25,
  ladrar: function () {
    alert('guau guau!!!!');
  },
};

cadena = JSON.stringify(perro);

function miFunciona() {
  let aString = cadena.toString();
  return [...aString].length;
}

console.log(miFunciona());
