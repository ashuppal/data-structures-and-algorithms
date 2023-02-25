'use strict';

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.front = null;
    this.rear = null;
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

  peek () {
    if (!this.front) {
      throw new Error ('Queue is empty');
    }
    return this.front.val;
  }

  isEmpty () {
    if (!this.front) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
