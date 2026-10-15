
const firstName = "John";
const lastName = "Doe";
const ageID = 42;
const city = "New York";

const fullName = firstName + " " + lastName;
console.log('My name is', fullName, ', I\'m', ageID, 'years old, I live in', city);

alert(`Hello World! - signed ${fullName} - ${ageID}yo, from ${city}`);


let temperature = 20;
const country = "France";

temperature = 30;

console.log(temperature + " " + country);

console.log(4 > 2); // true
console.log(5 <= 5); // true
console.log(3 == "3"); // true
console.log(3 === "3"); // false


let prix = "10";
let total = prix + 5; // 105

console.log(total); // 105

let pseudo = "PixelWarrior";
let niveau = 12;
let classe = "mage";

console.log(`${pseudo} est un ${classe} de niveau ${niveau}.`);

let age = 16;
const message = age >= 18 ? "Tu peux entrer" : "Accès refusé";
console.log(message);
 
let x = 5;
let y = 8;
const superieur = x > y ? x : y;
console.log(superieur);

let motDePasse="azerty";
const verification = motDePasse === "azerty" ? 
'Bienvenue!' : 'Mot de passe incorrect';
console.log(verification);

let note = 13;
if (note >= 16) {
    console.log("Très bien");
} else if(note >= 10) {
    console.log('Passable');
} else {
    console.log('Insuffisant');
}

let i=1;
while (i <= 5) {
    console.log(i);
    i++;
} // il affiche les chiffre de 1 à 5 en s'arrêtant a 5

for (let i = 0; i < 3; i++) {
    console.log("Tour numéro:" + i);
    // 3 fois, il redit "Tour numero: 0", puis 1 , puis 2
    //for fait une itération en comparant i sa valeur initial
    //à la valeur 3 puis ajoute + 1, print 
    //et recommence avec la nouvelle valeur de i
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0){
        console.log(i);      
    }
}

function greet(name) {
    console.log(
        "Hello " + name + " :)"
    );
    return "I did my job";
    // console.log("I feel useless :/");
}
greet("you");
greet("me");
greet("everybody");


const sum = (a, b) => a + b;
// console.log(sum);

function direBonjour(){
    console.log("Bonjour tout le monde");
}
direBonjour();
direBonjour();

function afficherPrenom(prenom) {
    console.log('Bonjour ' + prenom);
}
afficherPrenom("Jack");

function estMajeur(age) {
    if (age >= 18) {
        console.log(`A ${age} ans il est majeur`);
    } else {
        console.log(`A ${age} ans il est mineur`);
    }
}
estMajeur(18);
estMajeur(22);
estMajeur(12);

function max(a, b) {
    const sup = a > b ? a : b;
    console.log(sup);
}
max(8,5); // 8
max(16, 22); // 22

function doubler(nombre) {
    nombre = nombre * 2;
    console.log(nombre);
}
doubler(4); //8
doubler(7); //14

function somme(a, b) {
    const add = a + b;
    console.log(a, " + ", b, " = ", add)
}
somme(12,8); //20
somme(5, 7); // 12

function carreSiPair(n) {
    if (n % 2 == 0) {
        n = n * n;
        console.log(n);
        
    } else {
        console.log('impaire');
    }
}
carreSiPair(4); // 16
carreSiPair(3); // impair
carreSiPair(12); // 144
carreSiPair(7); // impair

function compteJusqua(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);  
    }
    console.log(n);
}
compteJusqua(5);

function multiplesDeTroi(n) {
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }   
    }
}
multiplesDeTroi(12);


function ajouterPoints(pointsActuels, pointsGagnes) {
    const sum = pointsActuels + pointsGagnes;
    return sum;
}
function afficherScore(nom, score) {
    console.log(`Le joueur ${nom} a ${score} points.`);
}
afficherScore('Timoté', ajouterPoints(12,9));


const objetPersonne = { prenom : "Thimoté", age : 21, ville : "Jersey"};
console.log(objetPersonne);


let personne = {
    prenom : "Marie", age : 30, ville : "Nantes"
}
console.log(`${personne.prenom} a ${personne.age} et habite à ${personne.ville}`);


let chien = { nom: "Rex", age:2};
console.log(chien);
chien.age = { age:3};
console.log(chien.age);

let cle = "ville";
let utilisateur = {prenom: "Ali", ville: "Lille"};
console.log(utilisateur[cle]);

let personneN = {
    nom: "Safi",
    adresse: {
        rue: "10 rue des Lilas",
        ville: "Lyon"
    }
};
console.log(`${personneN.nom} habite à ${personneN.adresse.ville}, ${personneN.adresse.rue.slice(3)}`);


let voiture = {
    marque: "Renault",
    modele: "Clio",
    annee: 2015
};
for (const cle in voiture) {
    console.log(`${cle} : ${voiture[cle]}`);
};

function decrire(objet) {
    for (const cle in objet) {
        console.log(`${cle} : ${objet[cle]}`);
    }
};
let film = {
    titre: "Inception",
    annee: 2010,
    realisateur: "Nolan"
};
decrire(film);


function afficherFiche(personnage) {
    let list =[];
    for (const key in personnage) {
       list.push(`${key} : ${personnage[key]}`);
    }
    return list.join(' | ');
}
let fiche = {
    Nom : "Aria", 
    Classe: "Mage", 
    Niveau : 5, 
    Ville : "Eloria"
}
console.log(afficherFiche(fiche));
// Nom : Aria | Classe : Mage | Niveau : 5 | Ville : Eloria

const animaux = [ 'chat', 'chien', 'lapin'];
console.log(animaux.at(0), animaux.at(-1));

const fruits = ['pomme', 'banane', 'kiwi'];
fruits[1] = 'poire';
console.log(fruits);

let prenoms = ['Chloé', 'Jean-Pierre', 'Frédéri'];
function sayHi(names) {
    for (const element of names) {
        console.log(`Bonjour ${element}`);
    }
}
sayHi(prenoms);


function moyenneGenerale(eleves) {
    // SUDO
    let total = 0;
    for (let i = 0; i < eleves.length; i++) {
        // additionner les notes = total
        total = total + eleves[i];
        // comtper le nombre de notes = quantite
        //console.log(total, "nouveau resultat");
    }
    let moyenne = total / eleves.length;
    console.log(moyenne);
    // diviser le total  par la quantite   
}
let notes = [12, 15, 9, 18];
moyenneGenerale(notes);


function afficherTous(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}
afficherTous(['JS', 'HTML', 'CSS'])

function maxTab(tab) {
    let bigger = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > bigger) {
            bigger = tab[i];
        };
    }
    return bigger;
}
console.log(maxTab([4, 17, 9, 52, 32]));

function moyenneEleve(eleve) {
    //SUDO
    let total = 0;
    let quantite = eleve.notes.length
    
    for (let i = 0; i < eleve.notes.length; i++) {
        total = total + eleve.notes[i];
        // extraire le nombre de notes
        // calculer les notes = total
    }
    // diviser le total par la quantite = moyenneG
    let moyenneG = total / quantite
    //affichier la moyenneG
    console.log(`${eleve.nom} a obtenu ${moyenneG.toFixed(2)} en moyenne générale.`);
}
let eleve = {
    nom : "Sophie",
    notes : [12, 15, 13] 
};
moyenneEleve(eleve);


let personnages = ["Mario", "Luigi", "Peach", "Bowser"];
// SUDO
// 1 Crée une fonction 'afficherNoms' qui affiche chaque nom
function afficherNoms(personnage) {
    //extraire le nom
    for (let i = 0; i < personnage.length; i++) {
        const nom = personnage[i];
        //afficher le nom
        console.log(nom);
    }
}
afficherNoms(personnages);
// 2 Crée une fonction 'ajouterPersonnage(nom)' qui ajoute un personnage au tableau
function ajouterPersonnage(array, nom) {
    // récuperer le array de personnage actuel
    // rajouter un nom a l'array
    array.push(nom);
    // afficher le nouveau nom
    console.log(nom);
    // afficher le nouveau array
    console.log(array.at(-1), 'new name added');
}
ajouterPersonnage(personnages, "Gertrude")
// 3 Crée une fonction 'compterNomsLongs()' qui retourne combien on plus de 5 lettres
function compterNomsLongs(nom) {
    const nomLong = [];
    let quantity = 0;
    for (let i = 0; i < nom.length; i++) {
        // compter les lettres des noms
        if (nom[i].length > 5) {
            nomLong.push(nom[i]);
            quantity++;
        }
    }

    // montrer le nouvel array avec des nom a + de 5 lettres
    console.log(`Les noms avec plus de 5 lettres sont : ${nomLong.join(', ')}. Il en a ${quantity} au total`);
}
compterNomsLongs(personnages)
