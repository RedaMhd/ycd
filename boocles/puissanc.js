const pr = require('prompt-sync')();
let bas = parseInt(pr('nb : '));
let puiss = parseInt(pr('puissance : '));
let res = 1;

for(let i = 1; i <= puiss; i++){
    res *= bas;
}
console.log(res);