// dichiaro la variabile delle potenze di 2
let twoPow = 0;

// definisco un contatore i
let i = 0;

// imposto il ciclo while affinche la funzione Math.pow svolga le potenze 
// fintantoché il valore sia minore di 1000
while (twoPow < 1000) {
    twoPow = Math.pow(2, i);
    console.log(twoPow);
    i++;
}