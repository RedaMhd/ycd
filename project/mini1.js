let pr = require('prompt-sync')();

function clr() {
    console.clear();
};
function cllg(txt) {
    console.log(txt);
}

function quitte() { };

clr();
let apprenants = []; // ========================== the objct
let menu = {
    1: ajouter,
    2: afficher,
    3: rechercher,
    4: mettreAJour,
    5: supprimer,
    6: quitte
}

function f_menu() {
    while (true) {
        let choi;
        let i;
        
        clr();
        cllg('<====|>-- Menu --<|====>')
        for (i in menu) {
            cllg(`Entrer ${i} pour ${menu[i].name}!`)
        }
        
        cllg(apprenants);
        
        choi = parseInt(pr('  Votre Choi => '))
        if (choi !== 0 && choi <= i) {
            if (menu[choi].name === "quitte") {
                cllg(menu[choi].name);
                break;
            }
            // cllg(choi)
            menu[choi]();
            break;
        }
    }
}
function isInAprn(pnom) {
    for (let it in apprenants) {
        if (apprenants[it].pnom === pnom)
            return it;
        
    }
    return false;
}

function Apprenn(nom, not) {
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
        if (parseInt(pnom) === 6) {
            return f_menu();
        }
        not = pr('Not : ');
        is = isInAprn(pnom);
    }
    apprenants[apprenants.length] = new Apprenn(pnom, not);
    return f_menu();
}



function afficher() {
    let i;
    while (i !== "") {
        clr();
        cllg('<====|>-- Affichage --<|====>')
        for (let it in apprenants) {
            cllg(`prenom : ${apprenants[it].pnom} \nnot : ${apprenants[it].not} \n\n`)
        }
        i = pr('Click enter pour quiter :')
    }
    return f_menu();
};


function rechercher() {
    let pnom;
    pnom = pr('Enter Prenom to find : ');
    
    while (pnom !== "") {
        clr();
        while (!isInAprn(pnom) && pnom !== "") {
            clr();
            cllg('Click enter pour quiter \n Prenom not found \n Enter again : ');
            pnom = pr(' ->');
        }
        if (pnom === "") break;
        let item = isInAprn(pnom);
        cllg(`prenom : ${apprenants[item].pnom} \nnot : ${apprenants[item].not} `);
        cllg('Enter Prenom to find \n Or Click enter pour quiter \n');
        pnom = pr(' -> ');
    }
    
    return f_menu();
    
};


function mettreAJour() {
    let pnom;
    pnom = pr('Enter Prenom to Update : ');
    
    while (pnom !== "") {
        clr();
        while (!isInAprn(pnom) && pnom !== "") {
            clr();
            cllg('Click enter pour quiter \n Prenom not found \n Enter again : ');
            pnom = pr(' ->');
        }
        if (pnom === "") break;
        let item = isInAprn(pnom);
        cllg(`updating apprenants : ${apprenants[item].pnom} \nnot : ${apprenants[item].not} `);
        
        updateAppr(item);
    }
    
    return f_menu();
};

function updateAppr(itm) {
    let pnom = apprenants[itm].pnom;
    
    cllg('New Name for ' + pnom + ' \nClick Enter for the deffault value !!!')
    let newNom = pr('   >');
    cllg('new Not for' + pnom)
    let newNot = pr('   >');
    
    if (newNom === '' || newNom === pnom) {
        newNom = pnom;
    } else {
        let is = isInAprn(newNom);
        while (is) {
            clr();
            cllg('Apprennats exist deja !');
            newNom = pr('New Prenom : ');
            newNot = pr('Not : ');
            if (newNom === '' || newNom === pnom) {
                newNom = pnom;
                break;
            }
            is = isInAprn(newNom);
        }
    }
    
    apprenants[itm].pnom = newNom;
    apprenants[itm].not = newNot;
    return f_menu();
};

function supprimer() {
    
};

f_menu();