// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



// row 0 col 0, row 0 col1 , row 0 col2 

// row 1 col 2, row 2 col 2, row 2 col 1

// row 2 col 0, row 1 col 0, row 1 col 1

function matrix(n) {
    let matrix = makeEmptyMatrix(n)
    let counter = 1
    let start_row = 0
    let end_row = n-1
    let start_col = 0
    let end_col = n-1


    while (start_col <= end_col && start_row <= end_row){
        // top row
        for ( let i= start_col; i<= end_col; i++){
            matrix[start_row][i] = counter
            counter +=1
        }
        start_row ++
        
        //last column

        for (let i = start_row ; i <= end_row ; i++){
            matrix[i][end_col] = counter;
            counter ++
        }

        //bottom side
        end_col --

        for (let i = end_col; i >= start_col; i--){
            matrix[end_row][i] = counter
            counter ++
        }

        // left hand side
        end_row --

        for (let i = end_row; i >= start_row;  i--){
            matrix[i][start_col] = counter;
            counter ++
        }

        start_col ++

    }

    return matrix
}




function makeEmptyMatrix(n){
    let matrix = []

    for (let i = 0; i<n; i++){
        matrix.push(new Array(n).fill(0))
    }
    return matrix

}

module.exports = matrix;


