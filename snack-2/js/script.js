// chiedo all'utente di inserire un numero
let num = parseInt(prompt('Inserisci un numero'));

// dichiaro la variabile dell'operazione
let cube = 0;

// definisco in un ciclo for l'operazione da svolgere
for (let i = 1; i <= num; i++) {
    cube = i * i * i;
    console.log(cube);
}