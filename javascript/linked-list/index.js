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
      this.head = newNode;
      this.tail = this.head;
    }
    else{
      this.head.next = newNode;
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

}





module.exports = SinglyLinkedList;









