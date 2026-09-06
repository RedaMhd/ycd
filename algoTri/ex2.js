let tab = [34, 12, 5, 9, 42, 1];
let swp;
console.log(tab);
for (let i = 1; i < tab.length; i++) {
    let j = i;
    while (j >= 0 && tab[j] < tab[j - 1]) {
        swp = tab[j];
        tab[j] = tab[j - 1];
        tab[j - 1] = swp;
        j--;
    }
}
console.log(tab);