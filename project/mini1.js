let pr = require('prompt-sync')();

function clr() {
    console.clear();
};
function cllg(txt) {
    console.log(txt);
}

function afficher(){};
function rechercher(){};
function mettreAJour(){};
function supprimer(){};
function quitte(){};

clr();
let apprenants = [];
let menu = {
    1: ajouter,
    2: afficher,
    3: rechercher,
    4: mettreAJour,
    5: supprimer,
    6: quitte
}

function f_menu() {
    let choi = 0;
    while (true) {
        let i

        clr();
        cllg('<====|>-- Menu --<|====>')
        for (i in menu) {
            cllg(`Entrer ${i} pour ${menu[i].name}!`)
        }

        cllg(apprenants);

        choi = parseInt(pr('  Votre Choi => '))
        if (choi !== 0 && choi <= i) {
            if ("quitter" === menu[choi]) {
                cllg(menu[choi]);
                break;
            }
            cllg(choi)
            menu[choi]();
        }
    }
}
function isInAprn(pnom) {
    for (let it in apprenants) {
        if (apprenants[it].pnom === pnom)
            return true;

    }
    return false;
}

function Apprenn(nom, not){
    this.pnom = nom;
    this.not = not;
}

function ajouter() {
    let pnom;
    let not;
    clr();

    pnom = pr('New Prenom : ');
    not = pr('Not : ');

    let is = isInAprn(pnom);
    while (is) {
        clr();
        cllg('6 pour menu ...')
        cllg('Apprennats exist deja !');
        pnom = pr('New Prenom : ');
        if(parseInt(pnom) === 6){
            return f_menu();
        }
        not = pr('Not : ');
        is = isInAprn(pnom);
    }
    apprenants[apprenants.length] = new Apprenn(pnom, not);
    return f_menu();
}

f_menu();

