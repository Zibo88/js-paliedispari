// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo una parola
let userWord = 'ciao';

// creo la funzione
function palindromWord(test){
    
    let reverseWord = '';


    for(let i = test.length; i >= 0; i-- ){

        reverseWord = reverseWord + test[i];

    console.log(reverseWord)
        
    }

    return reverseWord

    
}









