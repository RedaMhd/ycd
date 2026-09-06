// 1. Création de l'objet étudiant
let etudiant = {
    nom: "Martin",
    prenom: "Sophie",
    notes: [14, 16, 12, 18, 15] // La valeur est un tableau !
};

// 2. Affichage des infos de base
console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);

// 3. Accéder et afficher le tableau
console.log("Liste des notes : " + etudiant.notes.join(", "));

// Bonus : Calculer la moyenne
let somme = 0;
for (let note of etudiant.notes) {
    somme += note;
}
let moyenne = somme / etudiant.notes.length;
console.log(`Moyenne : ${moyenne}`);