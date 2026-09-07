const prompt = require('prompt-sync')();

// 1. Demander le nombre d'éléments
let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ? "));

// 2. Initialiser un tableau vide
let monTableau = [];

// 3. Boucle de saisie
for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    // 4. Ajout de la valeur à la fin du tableau
    monTableau.push(valeur);
}

// 5. Affichage final
console.log("Voici votre tableau : ");
let help = parseInt(monTableau[0]);

for(let i = 0; i < monTableau.length ; i++)
{
    for(let j = 0; j < monTableau.length ; j++)
    {
        if(monTableau[i] < monTableau[j])
        {
            help = monTableau[i];
            monTableau[i] = monTableau[j];
            monTableau[j] = help;
        }
    }
}
console.log(monTableau);