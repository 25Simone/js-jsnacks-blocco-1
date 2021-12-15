// dichiaro la variabile somma
let sum = 0;

// dichiaro la variabile dei numeri n scelti dall'utente
let n;

// definisco un ciclo for per chiedere all'utente 10 volte un numero
for (let i = 0; i < 10; i++) {
    n = parseInt(prompt('Inserisci un numero'));
    // definisco la sommma dei numeri scelti dall'utente
    sum += n;
}
// stampo in conosle la somma dei numeri
console.log(sum);