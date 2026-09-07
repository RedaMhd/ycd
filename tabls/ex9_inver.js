let tab = [1,1,2,5,7,44,2,33,1,5];
let invTbl = [];
let i = 0;
tab.forEach(element => {
    invTbl[tab.length - 1 - i] = element;
    i++;
});

console.log(tab + " ====>\n" + invTbl)