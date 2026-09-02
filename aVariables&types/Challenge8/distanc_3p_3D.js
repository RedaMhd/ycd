const pr = require('prompt-sync')();

const ax = parseFloat(pr('point Ax :'));
const ay = parseFloat(pr('point Ay :'));
const az = parseFloat(pr('point Az :'));
const bx = parseFloat(pr('point Bx:'));
const by = parseFloat(pr('point By:'));
const bz = parseFloat(pr('point Bz:'));

console.log(`Distance ${((bx-ax)**2 + (by-ay)**2 + (bz-az)**2)**(1/2)}`)