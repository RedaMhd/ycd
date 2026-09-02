const pr = require("prompt-sync")();

let nbr = parseInt(pr('enter a number : '));
let i = 2;
let result;
let res1 = 1;
let _0 = 0;
if(nbr == 0 || nbr == 1)
{ 
    console.log(1);
}
while(i < nbr){
    result = res1 + _0;
    res1 += _0;
    _0++;
    i++;
}
console.log(result);