'use strict';

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert (val) {
    let newNode = new Node (val);

    if (!this.head) {
      //if there is no head, then the new node is the head.
      this.head = newNode;
      this.tail = this.head;
    } else {
      //if there is a head, then the new node is the new tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  includes (val) {
    let current = this.head;
    while (current) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
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

  append (val) {
    let newNode = new Node (val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  insertBefore (val, newVal) {
    let newNode = new Node (newVal);
    let current = this.head;
    if (val === this.head.val) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    while (current.next) {
      if (current.next.val === val) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }
    return 'Value not found';
  }

  insertAfter (val, newVal) {
    let newNode = new Node (newVal);
    let current = this.head;
    while (current) {
      if (current.val === val) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }
    return 'Value not found';
  }

  kthFromEnd (k) {
    if (k === null || k < 0) {
      throw new Error ('You did not insert  k value or k is negative value');
    }

    let current = this.head;
    let size = 0;
    while (current !== null) {
      current = current.next;
      size++;
    }

    if (k > size - 1) {
      throw new Error ('k value is greater than the list size');
    }
    let value = size - k - 1;
    current = this.head;
    while (value !== 0) {
      current = current.next;
      value--;
    }
    return current;
  }

  zipLists (list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    let newList = new SinglyLinkedList ();
    while (current1 || current2) {
      if (current1) {
        newList.append (current1.val);
        current1 = current1.next;
      }
      if (current2) {
        newList.append (current2.val);
        current2 = current2.next;
      }
    }
    return newList;
  }

  reverse () {
    let current = this.head;
    let previous = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
    return this;
  }
  

  //write pallidrome without using inbuilt methods
  isPalindrome () {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push (current.val);
      current = current.next;
    }
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverseArr.push (arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== reverseArr[i]) {
        return false;
      }
    }
    return true;
  }

  isPalindrome2(){
    //use the reverse method above to reverse the list and compare it to the original list
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push (current.val);
      current = current.next;
    }
    let reverseList = this.reverse();
    let current2 = reverseList.head;
    let arr2 = [];
    while (current2) {
      arr2.push (current2.val);
      current2 = current2.next;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr2[i]) {
        return false;
      }
    }
    return true;


   
  }
}

module.exports = SinglyLinkedList;

