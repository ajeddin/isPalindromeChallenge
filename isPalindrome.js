// Write your code below
/*
Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
*/

let word =  'hello';
function isPalindrome(word){
    wordReversed = [];
    for(i=0;i<word.length;i++){
        wordReversed.unshift(word[i])
    }
    wordReversed = wordReversed.join('')
    console.log(wordReversed);
    if(word==wordReversed){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome(word))


function isPalindromeReverse(word){
    wordArray = word.split('')
    wordArray= wordArray.reverse()
    wordArray= wordArray.join('')
    console.log(wordArray);
    return (word===wordArray) ? true : false
}
console.log(isPalindromeReverse(word))




function isPalindromeReverse2(word){
    return word.split('').reverse().join('') === word
}
console.log(isPalindromeReverse2(word))

const isPalin= (word) => {return word.split('').reverse().join('') === word}
console.log(isPalin(word))