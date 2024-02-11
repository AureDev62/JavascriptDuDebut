// function saluer() {
//     console.log('Salut');
// }
// saluer();

function saluer(nom) {
    console.log('Bonjour ' + nom);
}
saluer('Aurélien');

function calcul(a, b) {
    console.log(a * b);
}
calcul(4, 5);

// function somme(a, b) {
//     return a + b;
// }
// let result = somme(4, 5);
// console.log(result);

// function multiplication(c, d) {
//     return c * d;
// }
// let resultat = multiplication(4, 5);
// console.log(resultat);

// let monTableau = [10, 20, 30, 40, 50];
// //Déclaration de la variable avant son utilisation
// let resultat = moyenne(monTableau);
// console.log(resultat);

// function moyenne(tableau) {
//     let total = 0;
//     for (const nombre of tableau) {
//         total += nombre;
//     }
//     return total / tableau.length;
// }

// let monTableau = [10, 20, 30, 40, 50];
// // Cette ligne déclare une variable monTableau et lui affecte un tableau de cinq nombres
// function moyenne(tableau) {
//     //Cette ligne définit une fonction nommée moyenne qui prend un paramètre tableau.
//     let total = 0;
//     // Cette ligne déclare une variable total à l'intérieur de la fonction moyenne et l'initialise à 0.
//     for (const nombre of tableau) {
//         // Cette ligne commence une boucle for...of qui parcourra chaque nombre du tableau tableau.
//         total += nombre;
//         // Cette ligne ajoute chaque nombre du tableau tableau à la variable total.
//         console.log(`Total à ce stade : ${total}`);
//         // Cette ligne affiche le total cumulé à chaque étape de la boucle.
//         // La fonction console.log est utilisée pour afficher du texte dans la console.
//         // La chaîne de caractères Total à ce stade : ${total} est affichée,
//         // avec la valeur de la variable total insérée dynamiquement grâce
//         // à l'interpolation de chaînes de caractères.
//     }
//     return total / tableau.length;
//     // Cette ligne calcule et retourne la moyenne du tableau.
//     // La division total / tableau.length calcule la moyenne des nombres du tableau.
//     // Le mot-clé return est utilisé pour retourner la valeur de la moyenne.
// }

// let resultat = moyenne(monTableau);
// // Cette ligne appelle la fonction moyenne avec le tableau monTableau comme argument.
// // Le résultat de la fonction est stocké dans la variable resultat.

// console.log(`Résultat final : ${resultat}`);
// // Cette ligne affiche la valeur de la variable resultat, qui contient la moyenne du tableau.
// // La fonction console.log est utilisée pour afficher du texte dans la console.
// // La chaîne de caractères Résultat final : ${resultat} est affichée,
// // avec la valeur de la variable resultat insérée dynamiquement grâce
// // à l'interpolation de chaînes de caractères.

let monTableau = [10, 20, 30, 40];
function plusGrand(tableau) {
    if (tableau.length === 0) {
        return undefined;
        // Cette ligne vérifie si le tableau passé en paramètre est vide.
        //  Si c'est le cas (si sa longueur est égale à zéro), cela signifie
        // qu'il n'y a pas de nombres à comparer, donc la fonction renvoie undefined.
    }
    let max = tableau[0];
    // Cette ligne initialise une variable max avec la première valeur du tableau,
    // supposant que c'est le plus grand nombre jusqu'à présent.
    for (let i = 1; i < tableau.length; i++) {
        // Cette ligne commence une boucle qui parcourt le tableau à partir du deuxième élément (l'index 1),
        // car nous avons déjà considéré le premier élément dans max.
        if (tableau[i] > max) {
            // Cette ligne vérifie si l'élément actuel du tableau est plus grand que max.
            max = tableau[i];
            // Si l'élément actuel est plus grand que max,
            // la valeur de max est mise à jour avec cet élément.
        }
    }
    return max;
    // Une fois que la boucle est terminée,
    // la fonction renvoie la valeur de max, qui est le plus grand nombre trouvé dans le tableau.
}

// let resultat = plusGrand(monTableau);
// // Cette ligne appelle la fonction plusGrand avec monTableau comme argument,
// // stockant le résultat dans une variable appelée resultat.
// console.log(resultat);
// // Cette ligne affiche le résultat dans la console,
// // qui est le plus grand nombre trouvé dans le tableau monTableau.

// function estPair(nombre) {
//     return nombre % 2 === 0;
// }
// console.log(estPair(4));
// // Cela affichera true dans la console
// console.log(estPair(7));
// // Cela affichera false dans la console

// function inverserChaine(chaine) {
//     let chaineInverse = '';
//     // déclaration d'une variable chaineInverse pour stocker la chaîne inversée.
//     // initialise à une chaîne vide ''.
//     for (let i = chaine.length - 1; i >= 0; i--) {
//         //Cette ligne utilise la boucle for pour parcourir la chaine de caractères'chaine' à l'envers
//         //en commencant par l'index'chaine.length -1'
//         //(index du dernier caractères de la chaîne et en allant jusqu'a zero)
//         chaineInverse += chaine[i];
//         // À chaque itération de la boucle,
//         // ajout le caractère actuel à la variable chaineInverse.
//     }
//     return chaineInverse;
//     // Une fois la boucle terminée,retour de la chaîne inversée chaineInverse.
// }

// // Testons la fonction
// console.log(inverserChaine('Bonjour'));
// // Cela affichera "ruojnoB" dans la console
// console.log(inverserChaine('Hello World!'));
// // Cela affichera "!dlroW olleH" dans la console

function compterOccurrences(chaine, caractere) {
    let compteur = 0;
    // Déclaration d'une variable 'compteur'pour stocker le nombre d'occurences du caractère donné
    // Initialisation à '0'
    for (let i = 0; i < chaine.length; i++) {
        //utilisation d'une boucle for pour parcourir chaque caractère de la chaîne chaine.
        if (chaine[i] === caractere) {
            // À chaque itération, vérification si le caractère actuel (chaine[i])
            //  est égal au caractère donné (caractere).
            // Si c'est le cas, incrémentation du compteur.
            compteur++;
        }
    }
    return compteur;
    // Une fois la boucle terminée,
    // nous retournons le nombre d'occurrences du caractère donné.
}

console.log(compterOccurrences('Bonjour', 'o'));
// Cela affichera 2 dans la console
console.log(compterOccurrences('Hello World!', 'd'));
// Cela affichera 3 dans la console

function longueurChaine(chaine) {
    return chaine.length;
    //utilisation de la propriété 'length' pour obtenir la longueur de la chaine,
    //donnée en paramètre
}
let longueur = longueurChaine('Bonjour');
console.log(longueur);

let number = -10;

function verifierNombre(num) {
    if (num < 0) {
        return 'négatif';
    } else if (num > 0) {
        return 'positif';
    } else {
        return 'nul';
    }
}

console.log(verifierNombre(number));

function sommeJusqua(nombre) {
    let somme = 0;
    // Initialisation d'une variable appelée 'somme' à zéro.
    // Cette variable sera utilisée pour stocker la somme des nombres de 1 jusqu'à nombre.
    for (let i = 1; i <= nombre; i++) {
        // Utilisation d'une boucle for pour parcourir tous les nombres de 1 jusqu'à nombre.
        // À chaque itération de la boucle, ajout du nombre actuel à la variable somme.
        // let i = 1 : NInitialisation d'une variable i à 1,
        // On commence à partir du nombre 1.

        // i <= nombre : La condition de la boucle,
        // elle spécifie que la boucle doit continuer tant que i est inférieur ou égal à nombre.

        // i++ : L'expression d'itération, elle incrémente i de 1 à chaque itération.

        // somme += i :
        // À chaque itération de la boucle, nous ajoutons la valeur actuelle de i à la variable somme.
        somme += i; // Ajoute le nombre actuel à la somme
    }
    return somme; // Retourne la somme
}
// Appel de la fonction sommeJusqua avec un nombre spécifique
// pour obtenir la somme de tous les nombres de 1 jusqu'à ce nombre.
console.log(sommeJusqua(5)); // Devrait afficher 15, car 1 + 2 + 3 + 4 + 5 = 15
console.log(sommeJusqua(10)); // Devrait afficher 55, car 1 + 2 + 3 + ... + 10 = 55

function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
        // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    }

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
            // Si le nombre est divisible par un nombre autre que 1 et lui-même,
            // il n'est pas premier
        }
    }

    return true;
    // Si aucun des nombres n'a été trouvé pour diviser le nombre, il est premier
}

console.log(estPremier(7));
// Devrait afficher true, car 7 est un nombre premier
console.log(estPremier(10));
// Devrait afficher false, car 10 n'est pas un nombre premier
