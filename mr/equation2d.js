const pr = require('prompt-sync')();
// ax² + bx + c = 0
consle.log('  Reoudre une equation  \ndu second degre ax²+bx+c=0')
const a = parseInt(pr('a = ? : '));
const b = parseInt(pr('b = ? : '));
const c = parseInt(pr('c = ? : '));

const delta = b**2 - (4 * a * c);

