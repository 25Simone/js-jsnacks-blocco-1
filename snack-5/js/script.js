// definisco l'array
const numList = [];

// dichiaro la variabile somma
let sum = 0;

let n;
do {
    n = parseInt(prompt('Inserisci un numero'));
    numList.push(n);
    for (let i = 0; i < numList.length; i++) {
        sum += numList[i];   
        console.log(sum);
    }
} while (sum < 50);