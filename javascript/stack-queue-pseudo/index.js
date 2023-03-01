'use strict';

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
  }
}

class PseudoQueue {
  constructor () {
    this.stack1 = new Stack ();
    this.stack2 = new Stack ();
  }


  enqueue (val) {
    let newNode = new Node (val);
    if (!this.front) {
      this.front = newNode;
      this.back = this.front;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }


  dequeue () {
    if (!this.front) {
      throw new Error ('Queue is empty');
    }
    let dequeued = this.front;
    this.front = this.front.next;
    return dequeued.val;

  }

  toString () {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{${current.val}} -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

}


module.exports = PseudoQueue;

let pseudoQueue = new PseudoQueue ();
pseudoQueue.enqueue (1);


