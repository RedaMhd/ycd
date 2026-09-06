const pr = require("prompt-sync")();

let nbr = parseInt(pr('enter a number : '));

let i = 2;
let result;
let res1 = 1;
let _0 = 0;
if(nbr == 0){
    console.log(0);
}else if(nbr == 1){
    console.log(1);
}else {
    while(i <= nbr){
        result = res1 + _0;
        _0 = res1;
        res1 = result;
        i++;
    }
}
console.log(result);
