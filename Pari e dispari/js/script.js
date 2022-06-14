// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Utente sceglie pari o dispari
let userChoice = prompt('Scegli pari o dispari'); 

// numero scelto dall'utente
let userNumber = parseInt (prompt('scegli un numero tra 1 e 5'));
// console.log("Questo è il numero dell'utente", userNumber)

// evoco la funzione del pc e la salvo in una variabile
let pcNumber = getRndInteger(1, 5);
// console.log('Questo è il numero del pc', pcNumber)

// creo una variabile per la somma dei numeri
let sum = userNumber + pcNumber;
console.log("questa è la somma tra user e pc", sum)

// evoco la funzione numberEvenOrOdd 
evenOrOdd = numberEvenOrOdd (sum);
// console.log(evenOrOdd)

// stabilisco chi ha vinto

let userMessage;

if ( userChoice == evenOrOdd){
    userMessage = 'Hai vinto';
}else if (userChoice == evenOrOdd){
    userMessage = 'Hai vinto';
} else (
    userMessage = 'Hai perso'
)

alert(userMessage)

// console.log(userMessage)



// FUNCTION
// creo una funzione che generi un numero random per il computer 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creo una funzione che definisca se un numero è pari o dispari
function numberEvenOrOdd (numberToCheck){

    let evenOrOdd;

    if (sum % 2 == 0){

        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }

    return evenOrOdd
}


