const pr = require('prompt-sync')();

// 65 90 97 122
const letter = pr("donner un letter : ");

if(letter >= 65 || letter <= 90)
    console.log('letter ');
else
    console.log('nop');