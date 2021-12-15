// chiedo un numero di 4 cifre all'utente
let num = prompt('Inserisci qui un numero di 4 cifre');

// dichiaro la variabile somma
let sum = 0;

if (num.length === 4) {
    // imposto un ciclo for per sommare i numeri che costituiscono il numero
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    // stampo il risultato
    console.log(sum);
} else {
    console.log('Il numero inserito non è valido. Inserisci un numero di 4 cifre');
}
