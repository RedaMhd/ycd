const pr = require('prompt-sync')();

const chr = pr('enter the char : ');

switch (chr){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log(`La lettre "${chr}" est une voyelle.`);
        break;
    default:
        console.log(`La lettre "${chr}" est une consonne (ou un autre caractère).`);
}