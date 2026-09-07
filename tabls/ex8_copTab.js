let tab = [1,1,2,5,7,44,2,33,1,5];
let cpTab = [];
let i = 0;
tab.forEach(element => {
    cpTab[i] = element;
    i++;
});

console.log(tab + " ====>\n" + cpTab)