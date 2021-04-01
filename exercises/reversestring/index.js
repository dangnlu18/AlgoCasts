// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let val = str.length
    let result = ''
    console.log(result)
    while(val > 0){
        result += str[val-1]
        val -= 1
    }
    return result
}

module.exports = reverse;
