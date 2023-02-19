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

  insert(val){

    let newNode = new Node(val);

    if(!this.head){
      //if there is no head, then the new node is the head.
      this.head = newNode;
      this.tail = this.head;
    }
    else{
      //if there is a head, then the new node is the new tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }


  includes(val){
    let current = this.head;
    while(current){
      if(current.val === val) return true;
      current = current.next;
    }
    return false;
  }

  toString(){

    let current = this.head;
    let string = '';
    while(current){
      string += `{${current.val}} -> `;
      current = current.next;
    }
    string += 'NULL';
    return string;
  }

//double linked list - stretch goal
}





module.exports = SinglyLinkedList;









