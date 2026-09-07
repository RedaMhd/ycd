let tab = [1,2,3,7,44,55];
let toFind = 7;
let isF = false;
let max = tab.length - 1;
let min = 0;

while(!isF && max >= 0 && min >= 0){
    let mid = parseInt((max + min) / 2);
    if(toFind === tab[min] || toFind === tab[max]){
        isF = true;
        break;
    }
    else if(toFind > tab[min] && toFind < tab[max])
    {
        if(toFind <= tab[mid])
            max = mid;
        else
            min = mid;
    }
    else
        break ;
}

isF ? console.log('finded') : console.log('not found');
