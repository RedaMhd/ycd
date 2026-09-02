const pr = require('prompt-sync')();
const tm_eau = Number(pr("température en Celsius ? "));
if (tm_eau < 0){
    console.log('solide');
}else if (tm_eau < 100){
    console.log('liquide');
}else {
    console.log('gaz');
}