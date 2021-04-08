// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = makeDict(str)
    let result;
    let max = 0

    for (const character in map){
        if( map[character] > max){
            result = character
            max = map[character]
        }
    }

    return result

}

function makeDict(str){
    let dict = {}
    for (let index in str){
        if(dict[str[index]]){
            dict[str[index]] +=1
        }
        else{
            dict[str[index]] = 1
        }
    }
    return dict
}

//cleaner way to code this
function makeDict(str){
    let dict = {}
    for (let char of str){
        if(dict[char]){
            dict[char] ++
        }
        else{
            dict[char] = 1
        }
    }
    return dict
}

module.exports = maxChar;
