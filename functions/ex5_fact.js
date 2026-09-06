const pr = require('prompt-sync')();


function calcul_factoriell(num){
    let i = num - 1;
    while(i > 0){
        num *= i;
        i--;
    }
    console.log(num);
}

let num = parseInt(pr("donner un nember : "));
calcul_factoriell(num);
