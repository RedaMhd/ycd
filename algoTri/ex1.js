let tab = [34, 12, 5, 9, 42, 1];
let swp;
console.log(tab);
for(let i = 1; i < tab.length; i++){
    for(let j = 1; j <= tab.length - i; j++){
        if(tab[j-1] < tab[j]){
            swp = tab[j];
            tab[j] = tab[j-1];
            tab[j-1] = swp;
        }
    }
}
console.log(tab);