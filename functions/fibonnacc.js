const pr = require('prompt-sync')();

function calcul_fibona(n) {
    /* if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else {
        return (calcul_fibona(n - 1) + calcul_fibona(n - 2));
    } */

    let i = 2;
    let result;
    let res1 = 1;
    let _0 = 0;
    if (n == 0) {
        console.log(0);
    } else if (n == 1) {
        console.log(1);
    } else {
        while (i <= n) {
            result = res1 + _0;
            _0 = res1;
            res1 = result;
            i++;
        }
    }
    console.log(result);
}

let nb = parseInt(pr('enter number : '));
calcul_fibona(nb);
//console.log(calcul_fibona(nb));