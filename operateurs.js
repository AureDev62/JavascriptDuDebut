//Opérateurs arithmétiques

// let x = 10;
// let y = 5;
// let z = 3;
// let addition = x + y;
// let soustraction = x - y;
// let multiplication = x * y;
// let division = x / y;
// let modulo = x % z;
// console.log(addition, soustraction, multiplication, division, modulo);

//Opérateurs de comparaison
// let a = 10;
// let b = 5;
// let c = 5;
// let d = '5';
// console.log(a > b); //true (a est plus grand que b)
// console.log(a === b); //false(a et b sont strictement différents)
// console.log(a !== b); //true(a et b sont bien différents)
// console.log(a == b); //false( car valeur de a et b sont différentes comparaison non stricte)
// console.log(c != d); //false(après conversion implicite les valeurs sont identiques )
// console.log(c !== d); // true(les types sont différents, meme si les valeurs sont équivalentes)

// console.log(5 == '5'); // true (la chaîne "5" est convertie en nombre)
// console.log(true == 1); // true (le booléen true est converti en nombre 1)
// console.log(false == 0); // true (le booléen false est converti en nombre 0)
// console.log(null == undefined); // true (ces deux valeurs sont considérées comme équivalentes)
// console.log(0 == ''); // true (0 est converti en une chaîne vide)
// console.log(0 == false); // true (0 est considéré comme équivalent à false)

// console.log(5 === '5'); // false (même si les valeurs sont égales, les types sont différents)
// console.log(true === 1); // false (les types sont différents)
// console.log(null === undefined); // false (les types sont différents)
// console.log(0 === ''); // false (les types sont différents)
// console.log(0 === false); // false (les types sont différents)

//OPERATEURS LOGIQUES
// let e = true;
// let f = false;
// console.log(e && f); // false (ET logique)
// console.log(e || f); // true (OU logique)
// console.log(!e); //false (NON logique)
// console.log(!f); //true (NON logique)

//&&
// Expression1   Expression2   Résultat
// --------------------------------------
//   true           true        true
//   true           false       false
//   false          true        false
//   false          false       false

// ||
// Expression1   Expression2   Résultat
// --------------------------------------
//   true           true        true
//   true           false       true
//   false          true        true
//   false          false       false

//OPERATEURS D ASSIGNATION
// let g = 10;
// g += 5; // équivaut à x = x + 5;
// console.log(g); // Affiche 15

// let h = 20;
// h -= 3; // équivaut à y = y - 3;
// console.log(h); // Affiche 17

// let i = 5;
// i *= 2; // équivaut à z = z * 2;
// console.log(i); // Affiche 10

// let j = 50;
// j /= 10; // équivaut à w = w / 10;
// console.log(j); // Affiche 5

// let k = 13;
// k %= 5; // équivaut à v = v % 5;
// console.log(k); // Affiche 3

// //Opérateurs d'incrémentation et décrémentation
// let l = 10;
// l++; // Incrémentation
// console.log(l); // 11
// let m = 5;
// m--; // Décrémentation
// console.log(m); // 4

//EXERCICES
//Calcul d'une aire d'un rectangle

// let longueur = 10;
// let largeur = 5;
// console.log("l'aire du rectangle est de " + longueur * largeur);

//Addition de deux nombres

//utilisation de prompt pour demander les nombres à l'utilisateur
//alert pour afficher à l'écran le résultat
//parseInt pour transformer la chaine de caractère que récupère prompt
//sans le parseInt ca ferait par exemple :premierNombre:5, et deuxime nombre:5 le résultat serait 55
// let premierNombre = parseInt(prompt('Entrez le premier nombre'));
// let deuxiemeNombre = parseInt(prompt('Entrez le deuxieme nombre nombre'));

// alert('le résultat est ' + (premierNombre + deuxiemeNombre));

//Conversion température

// let temperature = parseFloat(prompt('Entrez votre température en Celsius'));

// alert(
//     'La température en Fahrenheit est de ' +
//         ((temperature * 9) / 5 + 32) +
//         ' degrés Fahrenheit'
// );

//Division de nombres entiers

// let premierNombre = parseInt(prompt('Entrez votre premier nombre entier'));
// let deuxiemeNombre = parseInt(prompt('Entrez votre deuxime nombre entier'));

// alert(
//     'le résultat est : ' +
//         parseInt(premierNombre / deuxiemeNombre) +
//         '  et reste : ' +
//         (premierNombre % deuxiemeNombre)
// );

//Calcul d'un périmètre et d'une aire d'un cercle

// let rayon = parseFloat(prompt("Entrez le rayon d'un cercle"));

// alert(
//     'Le périmètre du cercle est de ' +
//         2 * 3.14 * rayon +
//         " et l'aire est de  " +
//         3.14 * rayon ** 2
// );

//Conversion de devise

// const tauxDeChange = 1.15;

// let sommeEuros = parseFloat(prompt('Entrez la somme en euros'));
// alert('La somme en dollars est de ' + sommeEuros * tauxDeChange);

//Calcul vitesse Moyenne

// let distance = parseInt(prompt('Entrez votre distance en kilomètres'));
// let temps = parseInt(prompt('Entrez votre temps en minutes'));

// let tempsDecimal = temps / 60;

// alert('la vitesse moyenne est de ' + (distance / tempsDecimal));

//Calcul d'une aire d'un triangle

// let hauteur = parseInt(prompt('Entrez la hauteur du triangle'));
// let base = parseInt(prompt('Entrez la base du triangle'));

// alert("L'aire du triangle est de " + (hauteur * base) / 2);

//Pair ou impair
