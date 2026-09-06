const pr = require('prompt-sync')();
function is_pair(n){
    return (n % 2 == 0 ? true : false)
}

let nb = parseInt(pr('enter nb '));
console.log(is_pair(nb));