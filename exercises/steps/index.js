// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let mat = createMatrix(n)
//     for ( let i=0; i< n; i++){
//         for (let j=0; j < i+1; j++){
//             mat[i][j] = '#'
//         }
//         console.log( mat[i].join(''))
//     }

// }

// function createMatrix(n){
//     let result = []
//     for (let i=0; i<n; i++){
//         result.push(new Array(n).fill(' '))
//     }
//     return result
// }


function steps(n, counter= 0){
    let result = new Array(n).fill(' ')
    if (counter === n ){
        return
    }

    for (let i=0; i < counter + 1; i++){
        result[i] = '#'
    }
    console.log(result.join(''))
    steps(n, counter+1)

}


module.exports = steps;
