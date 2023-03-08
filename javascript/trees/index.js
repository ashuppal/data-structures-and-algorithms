'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;

  }
  preOrder() {
    const results = [];

    const traverse = (node) => {

      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;

  }

  inOrder() {
    const results = [];
    const traverse = (node) => {

      if (node.left) traverse(node.left);
      results.push(node.value);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }


  postOrder() {
    const results = [];
    const traverse = (node) => {

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

}

class BinarySearchTree extends Tree {
  super() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let contains = false;

    while (current && !contains) {
      if (value < current.value) {
        current = current.left;
      }else if (value > current.value) {
        current = current.right;
      } else {
        contains = true;
      }
    }
    return contains;

  }

  findMaximumValue(){

    if (this.root===null) throw new Error ('you do not have a tree');
    let number=0;

    const traverse=(node)=>{

      if(number<node.value){
        number=node.value;
      }
      if(node.left){
        traverse(node.left);

      }
      if(node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return number;
  }

  findBreadthFirst(){
    if(this.root===null) throw new Error ('you do not have a tree');
    let queue=[];
    let results=[];
    queue.push(this.root);
    while(queue.length){
      let current=queue.shift();
      results.push(current.value);
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
    }
    return results;
  }
}

const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

const binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);

// console.log('preOrder', tree.preOrder());
// console.log('inOrder', tree.inOrder());


// console.log('postOrder', tree.postOrder());

// console.log('contains', binarySearchTree.contains(3));
// console.log('contains', binarySearchTree.contains(8));


console.log(binarySearchTree.findMaximumValue());

console.log(binarySearchTree.findBreadthFirst());


module.exports = { Tree, Node, BinarySearchTree};





