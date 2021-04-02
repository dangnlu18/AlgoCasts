// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n>-1){
        return  parseInt(String(n).split('').reverse().join(''))
    }
    else{
        return parseInt(String(n).split('').reverse().join('')) * -1
    }
}

module.exports = reverseInt;
