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

  let lin = ""

for (let i = 0; i <= 4; i++) {
    lin = "G"
    for (let j = 0; j <= 4; j++) { 
        lin += 'a'
    }
    console.log(lin)
}