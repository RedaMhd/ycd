const pr = require('prompt-sync')();
let str = pr("enter la chaine principale ");
let souStr = pr("enter la sous-chaine ");
let i = 0;
let j = 0;

while (str[i]) {
    if (str[i] == souStr[j]) {
        while (souStr[j] == str[i + j]) {
            j++
        }
        if ()
    }
}

n