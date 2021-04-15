// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// length of stair is 2n - 1


// n= 3



function pyramid(n, row=0, stair = '') {


    if (row === n){
        return
    }


    if (stair.length === 2*n - 1){
        console.log(stair)
        return pyramid(n, row+1)
    }

    const mid = Math.floor((2*n -1)/2)

    let add;

    if (mid - row <= stair.length &&  mid + row >= stair.length){
        add = '#'
    }
    else{
        add = ' '
    }
    
    pyramid(n, row, stair+ add)

}


// function createMatrix(n){
//     let result = []
//     for (let i=0; i<n; i++){  
//         result.push(new Array(n).fill(' '))
//     }
//     return result
// }

module.exports = pyramid;
