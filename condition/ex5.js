const pr = require('prompt-sync')();
const annee = Number(pr("voller entrer l'annee : "));
let choi = pr("Mois (1), Jours (2), Heures (3), Minutes (4), Secondes (5). \n");

if (choi == 1){
    console.log(`${annee * 12} Mois`);
}else if (choi == 2){
    console.log(`${annee * 365 + Number(annee / 4)} Jours`);
    
}else if (choi == 3){
    console.log(`${(annee * 365 + Number(annee / 4) * 24)} Heures`);
    
}else if (choi == 4){
    console.log(`${(annee * 365 + Number(annee / 4) * 24 * 60)} Minutes`);
    
}else if (choi == 5){
    console.log(`${(annee * 365 + Number(annee / 4) * 24 * 60 * 60)} Secondes`);
    
}else{
    console.log('error invalid choi');
}