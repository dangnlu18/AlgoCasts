// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    add(val){
        this.s1.push(val)
    }

    remove(){
        while(this.s1.peek()){
            this.s2.push(this.s1.pop())
        }
        const result =  this.s2.pop()

        while(this.s2.peek()){
            this.s1.push(this.s2.pop())
        }

        return result
    }

    peek(){
        while(this.s1.peek()){
            this.s2.push(this.s1.pop())
        }
       
        return this.s2.peek()

    }
}

module.exports = Queue;


