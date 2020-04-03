/************************************************************************
 * PALINDROME
 * 
 * Ask the user to enter a word
 * Create a function to understand if the entered word is palindrome
 ************************************************************************/

// VARIABLES
// var word = prompt('Inserisci una parola per verificare se è palindroma').trim().toLowerCase();

// INVOCATION
// var wordReverse = reverseWord(word);
// 
// console.log(word);
// console.log(wordReverse);
// 
// check if the word is palindrome
// if ( word == wordReverse ) {
    // console.log('la parola digitata è palindroma');
// } else {
    // console.log('la parola non è palindroma');
// }
// 

// DEFINITION

// reverse word function
// function reverseWord (parola) {
    // var reverse = '';
    // for ( var i = parola.length - 1; i >= 0; i-- ) {
        // reverse += parola[i];
    // }
    // return reverse;
// }



/***************************************************************************************
 * EVEN AND ODD
 * 
 * 1- The user chooses even or odd and a number from 1 to 5
 * 2- We generate a random number (always 1 to 5) for the computer 
 * 3- Let's add the two numbers
 * 4- We determine if the sum of the two numbers is even or odd (using a function)
 * 5- We declare who won
 ***************************************************************************************/

 var evenOddInput = prompt('scegli tra pari e dispari');
 console.log('Hai scelto: ' + evenOddInput);
 var numberInput = parseInt(prompt('scegli un numero da 1 a 5'));

// INVOCATION

//  generate a number 1-5

var cpuNumber = getRandomNumber (1,5);
console.log('Il numero scelto da te è: ' + numberInput);
console.log('Il numero scelto dal computer è: ' + cpuNumber);

// sum

var totalSum = sumNumber(numberInput, cpuNumber);
console.log('la somma tra numero scelto dall\'utente e quello scelto dal computer è: ' + totalSum)

// We determine if the sum of the two numbers is even or odd
var oddFunction = odd(totalSum);

if ( evenOddInput === 'pari' &&  oddFunction == true ) {
    console.log('Complimenti hai vinto, la somma tra i due numeri è pari');
} else if ( evenOddInput === 'pari' &&  oddFunction == false ) {
    console.log('Hai perso, la somma tra i due numeri è dispari');
} else if ( evenOddInput === 'dispari' &&  oddFunction == true ) {
    console.log('hai perso, la somma dei tra i due numeri è pari');
} else  {
    console.log('Complimenti hai vinto, la somma dei tra i due numeri è dispari');
} 
  






// DEFINITION

// random number function
function getRandomNumber (min, max) {
    
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// sum function
function sumNumber (num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// even and odd function
function odd (word) {
    if ( word % 2 === 0 ) {
        return true;
    }
    return false;
}