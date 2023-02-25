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

  push (val) {
    let newNode = new Node (val);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop () {
    if (!this.top) {
      throw new Error ('Stack is empty');
    }
    let popped = this.top;
    this.top = this.top.next;
    return popped.val;
  }

  peek () {
    if (!this.top) {
      throw new Error ('Stack is empty');
    }
    return this.top.val;
  }

  isEmpty () {
    if (!this.top) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
