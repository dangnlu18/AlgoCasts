// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

let mem = {}

function fib(n) {
    if (n===0){
        mem[0] = 0 
    }
    
    if (n===1){
        mem[1] =1 
    }
    
    if (n in mem){
        return mem[n]
    }
    else{
        mem[n] = fib(n-2) + fib(n-1)
        return mem[n]
    }

    
}


module.exports = fib;
