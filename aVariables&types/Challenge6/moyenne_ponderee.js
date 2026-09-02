const pr = require('prompt-sync')();
const ac = parseFloat(pr('1er nombre :')) * 2;
const bc = parseFloat(pr('2eme nombre :')) * 3;
const cc = parseFloat(pr('3eme nombre :')) * 5;

console.log(`Moyenne pondérée de trois nombres est :
    ${(ac+bc+cc)/(2+3+5)}
    `);