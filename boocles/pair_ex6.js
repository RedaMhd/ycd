const pr = require('prompt-sync')();
const n = Number(pr('donner le nombre n pour affiche les n pairs '));
let nb = 2;
for(let i = 1; i <= n; i++){
    console.log(nb);
    nb += 2;
}