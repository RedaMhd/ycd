const pr = require('prompt-sync')();
let n = Number(pr('donner le nombre n pour l\'affiche en inverse '));
let inv = 0;
let dev = 1;
while(dev <= (n/10)){
    dev *= 10;
}

let incre = 1;
while(dev >= 1){
    inv = inv + (parseInt(n /dev)* incre);
    incre *= 10;
    n = n - (parseInt(n /dev) * dev);
    //console.log(n)
    dev /= 10; 
}

console.log(inv);