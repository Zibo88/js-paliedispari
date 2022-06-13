// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo una parola
let userWord = 'ciao';

// invoco la funzione

let reverseWord = palindromWord(userWord);

// creo la funzione
function palindromWord(test){
    
    let reverseWord = '';

    let validation = false; 


    for(let i = test.length; i >= 0; i-- ){

        reverseWord = reverseWord + test[i];

       
        
    }

    return reverseWord
    
    
}

console.log(reverseWord)











