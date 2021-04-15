// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const map = makeCharMap(str)
    let count = 0
    
    for (let key of str){
        if (key ==='a' || key === 'e' || key==='i' || key ==='o' || key ==='u'){
            count += map[key]
        }
    }
    return count

}



function makeCharMap(str){
    let map = {}
    str= str.toLowerCase()
    for (let char of str){
        map[char] = map[char] +1 || 1 
    }
    return map
}

module.exports = vowels;
