// definisco l'array
const numList = [];

// dichiaro la variabile somma
let sum = 0;

let n;
do {
    n = parseInt(prompt('Inserisci un numero'));
    numList.push(n);
    sum += numList[numList.length - 1];   
    console.log(sum);
} while (sum < 50);

// -----------oppure-----------
// let i = 0;
// do {
//     n = parseInt(prompt('Inserisci un numero'));
//     numList.push(n);
//     sum += numList[i];   
//     console.log(sum);
//     i++
// } while (sum < 50);
