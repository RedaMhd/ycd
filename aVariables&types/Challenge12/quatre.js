let ncov = 0;

const pr = require('prompt-sync')();

let nub = Number(pr("sisir un nembre en 4 chifre :"));

ncov += (nub % 10);
console.log(ncov);

nub -= ncov;
nub /= 10;
ncov *= 10;
ncov += (Number(nub) % 10);
console.log(ncov);

nub -= ncov;
nub /= 10;
ncov *= 10;
ncov += (Number(nub) % 10);
console.log(ncov);

nub -= ncov;
nub /= 10;
ncov *= 10;
ncov += (Number(nub) % 10);

console.log(ncov);