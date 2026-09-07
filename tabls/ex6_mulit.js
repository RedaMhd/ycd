const prompt = require('prompt-sync')();

// 1. Demander le nombre d'éléments
let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ? "));
let fact = parseInt(prompt("le facteur de multiplication ? "));

// 2. Initialiser un tableau vide
let monTableau = [];

// 3. Boucle de saisie
for (let i = 0; i < taille; i++) {
    let valeur = parseInt(prompt(`Entrez l'élément n°${i + 1} :`));
    
    // 4. Ajout de la valeur à la fin du tableau
    monTableau.push(valeur * fact);
}

// 5. Affichage final
console.log("Voici votre tableau : ");
console.log(monTableau);