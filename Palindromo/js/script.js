// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere all'utente una parola
let userWord = ('ciao');
console.log('parola inserita', userWord);




// creo la funzione che analizzi se la parola è palindroma
function palindromWord(userWordToCheck){


    // creo una variabile flag
    let validation = false;
    let reverseWord = '';

    // creo un ciclo che analizzi le parole dalla fine verso l'inizio
    for(let i = userWordToCheck.length - 1; i >= 0; i--){
       
        reverseWord += userWordToCheck[i]

        console.log(reverseWord)

    }

    if (reverseWord == userWord){

        validation = true

        console.log(userWord)
    }

 

   

}

