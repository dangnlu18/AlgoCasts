// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const mapA = makeDict(stringA)
    const mapB = makeDict(stringB)

    if (Object.keys(mapA).length !== Object.keys(mapB).length){
        return false
    }
    else{
        for (let char in mapA){
            if(mapA[char] !== mapB[char]){
                return false
            }else{
                return true
            }
        }

    }

    // if (stringA.length !== stringB.length){
    //     return false
    // }
    // else{
    //     const mapA = makeDict(stringA)
    //     const mapB = makeDict(stringB)
        
    
       
    // }
}



function makeDict(str){
    let map = {}
    for (let element of str.replace(/[^\w]/g, '').toLowerCase()){
        if(map[element]){
            map[element] ++
        }else{
            map[element] = 1
        }
    }
    return map
}

module.exports = anagrams;
