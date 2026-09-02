const pr = require('prompt-sync')();
let tm = parseFloat(pr("veller sisire la temperature : "));
console.log(`votre temperature en kelvin est ${tm + 273.15}`);