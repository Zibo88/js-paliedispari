// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma




// 1. chiedere all'utente una parola
let askWord = prompt('dimmi una parola')
// console.log("parola chiesta all'utente", askWord);

 
// creo una variabile booleana
let validation = false;

// 2 creo una funzione
function palindromWord(checkWord) {

   // 2.2 variabile per la concatenazione delle lettere
    let reverseWord = "";
    
    // 2.1 ciclo for per analizzare le parole e scomporle
    for(i = askWord.length - 1; i >=0; i--){

        //2.3 creo una variabile per salvare la parola al contrario
        reverseWord = reverseWord += askWord[i];
        // console.log('creo una variabile per la parola al contrario', reverseWord)
    }
    // l'output è
    return reverseWord

}


// 3 invoco la funzione, tra le parentesi richiamo l'argomento che necessita per funzionare
const flippedWord = palindromWord(askWord)
// console.log('invoco la funzione', palindromWord)


// 4 creo una condizione
if(askWord == flippedWord){ 

   validation = true;

   console.log(validation)
   
}

















