const fecha = (date) => {
    if (!date) return console.warn('No ingresaste la fecha.');

    anios = 0
    for(i = date; i < 2024; i++){
      anios = anios + 1
    }

    return `Desde el año ${date} han transcurrido ${anios} años.`
  }

console.log(fecha(2000))