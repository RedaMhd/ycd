let tab = [34, 12, 5, 9, 42, 1];
let swp;
console.log(tab);
for (let i = 0; i < tab.length - 1; i++) {
    let j = i + 1;
    swp = i;
    while (j < tab.length) {
        if(tab[i] < tab[j] && tab[swp] < tab[j])
            swp = j;
        j++;
    }
    j = swp;
    swp = tab[j];
    tab[j] = tab[i];
    tab[i] = swp;
}
console.log(tab);

