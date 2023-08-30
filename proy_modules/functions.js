 require('colors');

function numerosPares(numeros) {
  if (!numeros || numeros.length === 0) {
    console.log(colors.red('El arreglo de números está vacío.'));
    return;
  }

  const numerosPares = numeros.filter(numero => numero % 2 === 0);

  console.log((`Número de números pares: ${numerosPares.length}`.bgYellow));
  console.log('¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿')
  console.log(('Números pares:'.bgYellow), numerosPares.join(', '));
  console.log('??????????????????????????????????????????????????????')
}

module.exports = {
  numerosPares,
};
