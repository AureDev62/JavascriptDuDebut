const Personname = 'John';
let age = 30;

console.log('Le nom est :  ' + Personname);
console.log("L'âge est de " + age + ' ans');

// Les numbers
let age2 = 30;
let pi = 3.14;

//String(chaine de caractères
let string = 'Jean';

//Boolean(booléen true ou false
let boolean = true;

//Array(tableau)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let colors = ['rouge', 'bleu', 'vert'];

//Object(objet)
let person = {
    nom: 'Jean',
    age: 30,
    travail: true,
};

//Null(null est utilisé pour représenter intentionnellement
//l'absence de valeur ou une valeur vide)
let valeurNull = null;

//undefined(undefined est utilisé pour représenter une variable
//non initialisée ou une valeur indéfinie.)

let variableNonAssignee;
console.log(variableNonAssignee);

let bigInt = 11n;
console.log(typeof bigInt);

let grandNombre = 1234567890123456789012345678901234567890n; // Utilisation de BigInt avec le suffixe n
let nombreNormal = 1234567890123456789012345678901234567890; // Nombre normal, potentiellement sujet à une perte de précision

console.log(grandNombre + 1n); // Affiche le résultat correct
console.log(nombreNormal + 1);
