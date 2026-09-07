let tab = [1,1,2,5,4,8,7,9,6,3,5,2,1,4,4,4,5,4,4,1,2,1];
let conter = {};

tab.forEach(element => {
    if(!conter[element]){
        conter[element] = 1;
    }else{
        conter[element] += 1;
    }
});

// console.log(conter[1])

for(let k in conter){
    console.log(`${k} is Duplicated for ${conter[k]} times!! `);
}


// for(let i = 1; conter[i]; i++){
//     console.log(conter[i])
// }

// function getKeys(obj) {
//   const keys = [];
//   for (const key in obj) {
//           keys.push(key);

//   }
//   return keys;
// }

// let a =  getKeys(conter);
// console.log(a)