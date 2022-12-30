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

const Stack = require("./stack");

class Queue {
  constructor() {
    this.qStackA = new Stack();
    this.qStackB = new Stack();
  }

  add(record) {
    this.qStackA.push(record);
  }

  remove() {
    while (this.qStackA.peek()) {
      this.qStackB.push(this.qStackA.pop());
    }
    const result = this.qStackB.pop();
    while (this.qStackB.peek()) {
      this.qStackA.push(this.qStackB.pop());
    }
    return result;
  }

  peek() {
    while (this.qStackA.peek()) {
      this.qStackB.push(this.qStackA.pop());
    }
    const result = this.qStackB.peek();
    while (this.qStackB.peek()) {
      this.qStackA.push(this.qStackB.pop());
    }
    return result;
  }
}

module.exports = Queue;
