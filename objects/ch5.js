let livre = {
    titre : "",
    auteur: "",
    annee : "",

}

function newObj(obj, title, aut, anne){
    obj.titre = title;
    obj.auteur = aut;
    obj.annee = anne;
    return obj;
}

let tst = newObj(livre, 'to', 'test' , 'livre');

console.log(livre);


// ==========================

function Livre(title, auteur, annee){
    this.title = title;
    this.auteur = auteur;
    this.annee = annee;
    this.show = function(){
        console.log(`Tile : ${this.title},\nAuteur : ${this.auteur},\nAnnee : ${this.annee}`);
    }
}

let liv2 = new Livre('hero', 'Z', '2448')

liv2.show();