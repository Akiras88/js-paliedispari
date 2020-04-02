/************************************************************************
 * PALINDROME
 * Ask the user to enter a word
 * Create a function to understand if the entered word is palindrome
 ************************************************************************/

// VARIABLES
var word = prompt('Inserisci una parola per verificare se è palindroma');

// INVOCATION
var wordReverse = reverseWord(word);

console.log(word.toLowerCase());
console.log(wordReverse.toLowerCase());

// check if the word is palindrome
if ( word == wordReverse ) {
    console.log('la parola digitata è palindroma');
} else {
    console.log('la parola non è palindroma');
}


// DEFINITION

// reverse word function
function reverseWord (parola) {
    var reverse = '';
    for ( var i = parola.length - 1; i >= 0; i-- ) {
        reverse += parola[i];
    }
    return reverse;
}
