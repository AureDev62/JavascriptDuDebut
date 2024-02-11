//Déclaration d'un tableau
let monTableau = [1, 2, 3, 4, 5];
//Acces au tableau suiavant l'index
console.log(monTableau[2]);
//modifiction d'un éléments dans le tableau
monTableau[0] = 150;

console.log(monTableau);
//longueur du tableau
console.log(monTableau.length);

//les méthodes tableaux

//push=ajout d'un ou plusieurs éléments
let fruits = ['pomme', 'banane'];
fruits.push('orange');
console.log(fruits);
// Affiche ['pomme', 'banane', 'orange']

//pop = supprime le dernier élément d'un tableau
let aliments = ['viande', 'radis', 'poivre'];
let dernierAliment = aliments.pop();
console.log(dernierAliment);
// Affiche 'poivre'
console.log(aliments);
// Affiche ['viande', 'radis']

//shift = suprrimele premier élément d'un tableau
let voitures = ['Renault', 'Citroen', 'BMW'];
let premiereVoiture = voitures.shift();
console.log(premiereVoiture);
// Affiche 'Renault'
console.log(voitures);
// Affiche ['Citroen', 'BMW']

//unshift = ajout d'un ou plusieurs élements dans un tableau
let planetes = ['Terre', 'Mars'];
planetes.unshift('Pluton');
console.log(planetes);
// Affiche ['Pluton', 'Terre', 'Mars']

//slice = renvoie une copie superficielle d'un tableau dans un nouveau tableau
let plantes = ['Tulipe', 'Rosier', 'Oeillet', 'Iris'];
let selection = plantes.slice(1, 3);
console.log(selection);
// Affiche ['Rosier', 'Oeillet']

//splice = modifie le contenu d'un tableau en suppriment ou en remplacant des éléments existants
//et ou en ajoutant de nouveaux éléments à la place
//Exemple ici: le premier spécifie l'index
//le deuxieme 1 le nombre d'élements à supprimer
//Les arguments suivants sont ceux que l'on rajoute
let animaux = ['chat', 'chien', 'souris'];
animaux.splice(1, 1, 'hamster', 'oiseau');
console.log(animaux);
// Affiche ['chat', 'hamster', 'oiseau', 'souris']

let meubles = ['table', 'chaise'];
let meubles1 = ['commode', 'penderie'];
let meuble2 = meubles.concat(meubles1);
console.log(meuble2);
// Affiche ['meuble', 'chaise', 'commode', 'penderie']

let legumes = ['radis', 'carotte', 'navet'];
legumes.forEach(function (legume) {
    console.log(legume);
});
// Affiche :
// radis
// carotte
// navet

// let nombres = [1, 2, 3, 4, 5];
// nombres.forEach(function (nombre, index) {
//     nombres[index] = nombre * 2;
//     // Double chaque nombre dans le tableau
// });
// console.log(nombres);
// // Affiche [2, 4, 6, 8, 10]

// let mots = ['Bonjour', 'à', 'tous'];
// function afficherEnMajuscules(mot) {
//     console.log(mot.toUpperCase());
// }
// mots.forEach(afficherEnMajuscules);
// // Appelle la fonction afficherEnMajuscules pour chaque élément

//EXERCICES

let nombres = [1, 2, 3, 4, 5];
function sommeElements(tableau1) {
    let somme = 0;
    tableau1.forEach(function (element) {
        somme += element;
    });
    return somme;
}

let resultat = sommeElements(nombres);
console.log(resultat);
//Affiche 15

function moyenneElements(tableau) {
    let somme = 0;
    let nombreElements = tableau.length;

    tableau.forEach(function (element) {
        somme += element;
    });

    if (nombreElements > 0) {
        return somme / nombreElements;
    } else {
        return 0;
        // Pour éviter une division par zéro si le tableau est vide
    }
}

let number = [1, 2, 3, 4, 5];
let result = moyenneElements(number);
console.log(result);
// afficher 3 (moyenne de 1, 2, 3, 4, 5)
