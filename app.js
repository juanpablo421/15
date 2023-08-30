const { numerosPares } = require('./proy_modules/functions.js');
const colors = require('colors');

const numeros = [21, 6, 5, 3, 7, 9];
console.log(colors.bgMagenta('ANALISIS DEL ARREGLO DE NUMEROS:'.underline), numeros);
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

numerosPares(numeros);
