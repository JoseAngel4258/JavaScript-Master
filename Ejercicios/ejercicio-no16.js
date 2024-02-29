const descuento = (monto, desc) => {
  if (!monto) return console.warn('No ingresaste el monto.');
  if (!desc) return console.warn('No ingresaste el descuento.');

  desc = (monto * desc) / 100;

  total = monto - desc;

  console.log(total);
};

descuento(19500, 20);
