// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// chiedere all'utente una parola
let userWordChoice = prompt('Dimmi una parola');

// variabile flag
let validation = false;

let reverseWord = '';


// creo una funzione per capire se la parola è palindroma
function palindromWord(userCheck) {

   
    // creo un ciclo for per analizzare la parola
    for(let i = userWordChoice.length - 1; i >= 0; i--){
       
        reverseWord = reverseWord + userWordChoice;
        
        
    }

    return reverseWord

}

if (reverseWord === userWordChoice){
    validation = true;
 
}

console.log(reverseWord);

// invoco la variabile
palindromWord (userWordChoice);







