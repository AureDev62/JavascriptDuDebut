// Les structures de controle

// let nombre = 10;

// if (nombre > 0) {
//     //si(if)le nombre est supérieur à  0 il est positif
//     console.log('Le nombre est positif.');
// }
// //si nombre négatif il renvoie rien

// let nombre1 = -5;

// if (nombre1 > 0) {
//     console.log('Le nombre est positif.');
// } else if (nombre1 < 0) {
//     console.log('Le nombre est négatif.');
// } else {
//     console.log('Le nombre est zéro.');
// }

//boucles

//for
//ici la boucle sera effectué 5 fois en démarrant de zéro
// for (let i = 0; i < 5; i++) {
//     console.log('la valeur de i est : ' + i);
// }
// for (initialisation; condition; incrémentation) {
//     // Instructions à répéter
//   }

//while
//ici la boucle while est exécuté tant que i est inférieur à 5
// let i = 0;
// while (i < 10) {
//     console.log('la valeur de i est : ' + i);
//     i++;
// }
// console.log('fin');

// while (condition) {
//     // Instructions à répéter
//incrémenteur
//   }

//do while

// let i = 0;
// do {
//     console.log('La valeur de i est : ' + i);
//     i++;
// } while (i < 10);

// do {
//     // Instructions à répéter
//   } while (condition);

//for of

// const fruits = ['pomme', 'banane', 'orange'];

// for (const fruit of fruits) {
//     console.log(fruit);
// }
// fruit est une variable qui prend la valeur de chaque élément du tableau fruits
//  à chaque itération de la boucle. À chaque itération, la valeur actuelle de fruit est affichée dans la console.

// const mot = 'Bonjour';

// for (const lettre of mot) {
//     console.log(lettre);
// }

// Cela affichera chaque lettre de la chaîne "Bonjour"
//  sur une ligne différente dans la console.

//-----------------------EXERCICES---------------------------------------------

////boucle inversée

// for (let i = 5; i >= 0; i--) {
//     console.log('Le nombre est :' + i);
// }

// Écrivez un programme qui affiche les nombres pairs de 1 à 10 à l'aide d'une boucle while
// let nombre = 1;

// while (nombre <= 20) {
//     if (nombre % 2 === 0) {
//         console.log(nombre);
//     }
//     nombre++;
// }

// Écrivez un programme qui affiche les nombres impairs de 1 à 9 à l'aide d'une boucle do...while.
// let nombre = 1;

// do {
//     if (nombre % 2 !== 0) {
//         console.log(nombre);
//     }
//     nombre++;
// } while (nombre <= 9);

// const nombres = [1, 2, 3, 4, 5];

// for (let i = nombres.length - 1; i >= 0; i--) {
//     console.log(nombres[i]);
// }

//  nombres.length - 1 pour obtenir l'index du dernier élément du tableau nombres.
// La boucle for commence par i égal à l'index du dernier élément (nombres.length - 1)
//  et continue tant que i est supérieur ou égal à 0.
// À chaque itération, nous affichons l'élément du tableau nombres à l'index i.
// En décrémentant i à chaque itération, nous parcourons le tableau dans l'ordre inverse,
//  en commençant par le dernier élément et en terminant par le premier.

//On peut faire pareil pour genre des chaine de caractères

const surname = ['Jean', 'John', 'Jane', 'Alice'];

for (let i = surname.length - 1; i >= 0; i--) {
    console.log(surname[i]);
}

// Écrivez un programme qui recherche un élément spécifique
//  dans un tableau valeurs et affiche son index si trouvé.
const valeurs = [10, 20, 30, 40, 50];
const elementRecherche = 60;
let index = -1; // Initialisation de l'index à -1, qui sera utilisé si l'élément n'est pas trouvé

for (let i = 0; i < valeurs.length && index === -1; i++) {
    if (valeurs[i] === elementRecherche) {
        index = i;
    }
}

if (index !== -1) {
    console.log("L'élément", elementRecherche, "a été trouvé à l'index", index);
} else {
    console.log(
        "L'élément",
        elementRecherche,
        "n'a pas été trouvé dans le tableau."
    );
}
