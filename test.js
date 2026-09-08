/* 
for(let i = 0; i < 5; i++){
  let lin = "";
  for(let j = 0; j < 5; j++){
    if((i + j) % 2 == 0){
      lin +="¤  ";
    }else{
      lin +="o  ";
    }
  }
  console.log(lin);
} */





/* let d = 4;

for(let i = 1; i <= d; i++){
  let lin = "";
  for(let j = 1; j <= d; j++){
    if(i % 2 == 0)
      lin += `[${i}]`;
    else
      lin += `${i}`;
  }
  console.log(lin);
} */

/* 
 let f = 3;
for(let i = 0; i <= f; i++)
{
  let lin ="";
  for(let j= 0;j <= f; j++){
    if(i == j){
      lin += " 1 ";
      break
    }else
      lin += " , ";
  }
  console.log(lin);
}  */

//   let lin = ""

// for (let i = 0; i <= 4; i++) {
//     lin = "G"
//     for (let j = 0; j <= 4; j++) { 
//         lin += 'a'
//     }
//     console.log(lin)
// }

  
// a = 1;
// console.log(a)
// if (true) {
//   console.log(a)
//   a = 3;
//   if (true) {
//     console.log(a)

//     b = "b"
//   }
//   console.log(b)
//   console.log(a)
// }

// console.log(b)


// function User(name, age)
// {
//   this.n = name;
//   this.j = age;
// }

// let reda = new User('mouh', 21);
// console.log(reda.n)


// let menu = {
//     1 : "ajouter",
//     2 : "afficher",
//     3 : "rechercher",
//     4 : "mettreAJour",
//     5 : "supprimer",
//     6 : "quitter"
// }

// for(let m in menu){
//   console.log(menu[m])
// }


// =========================================


// let note = [12,12,17,5,3,20,14,12,11];

// function getMyn(ar){
//   let somm = 0;
//   let my;
//   let i = 0;
//   let newArr = [];
//   ar.forEach(element => {
//     somm += element;
//     i += 1;
//   });

//   my = somm / i;
//   ar.forEach(element => {
//     if(element > my)
//     {
//       newArr.push(element)
//     }
//   });
//   console.log(newArr + ' ' + my);

// }
// getMyn(note)




function Student(name, age , not )
{
  this.name = name;
  this.age = age;
  this.not = not;
}
const nname = prompt("enter nome")
const agee = prompt("enter age")
const note = prompt("enter not")
Student(nname, agee , note)
//let yasin = new Student('yassine', '21', "20")

console.log(yasin.name)
console.log(yasin.not)
console.log(yasin.age)

console.log(yasin)
