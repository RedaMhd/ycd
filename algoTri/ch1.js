let tab = [1,2,3,4,6,7,9,11,33,45,61,77];
let toFind = 5;
let isF = false;
tab.forEach(element => {
    if(element === toFind)
        isF = true;
});
isF ? console.log('finded') : console.log('not found');