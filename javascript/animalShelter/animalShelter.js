'use strict';

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = this.front;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    let dequeued = this.front;
    this.front = this.front.next;
    return dequeued.val;
  }

  peek() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    return this.front.val;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    }
    return false;
  }
}




class Animal {
  constructor(name, species, next = null) {
    this.name = name;
    this.species = species;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  enqueue(name, species) {
    let newAnimal = new Animal(name, species);
    if (species === 'cat') {
      if (!this.cats.front) {
        this.cats.front = newAnimal;
        this.cats.back = newAnimal;
      } else {
        this.cats.back.next = newAnimal;
        this.cats.back = newAnimal;
      }
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        this.dogs.front = newAnimal;
        this.dogs.back = newAnimal;
      } else {
        this.dogs.back.next = newAnimal;
        this.dogs.back = newAnimal;
      }
    }
  }

  dequeue(species) {
    if (species === 'cat') {
      if (!this.cats.front) {
        return null;
      }
      let temp = this.cats.front;
      this.cats.front = this.cats.front.next;
      return temp;
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        return null;
      }
      let temp = this.dogs.front;
      this.dogs.front = this.dogs.front.next;
      return temp;
    }
    return null;
  }

}

module.exports = AnimalShelter;

let shelter = new AnimalShelter();
shelter.enqueue('cat1', 'cat');
shelter.enqueue('cat2', 'cat');
shelter.enqueue('cat3', 'cat');
shelter.enqueue('dog1', 'dog');



// 'use strict';

// class Node {
//   constructor (val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor () {
//     this.front = null;
//     this.rear = null;
//   }

//   enqueue (val) {
//     let newNode = new Node (val);
//     if (!this.front) {
//       this.front = newNode;
//       this.back = this.front;
//     } else {
//       this.back.next = newNode;
//       this.back = newNode;
//     }
//   }

//   dequeue () {
//     if (!this.front) {
//       throw new Error ('Queue is empty');
//     }
//     let dequeued = this.front;
//     this.front = this.front.next;
//     return dequeued.val;
//   }

//   peek () {
//     if (!this.front) {
//       throw new Error ('Queue is empty');
//     }
//     return this.front.val;
//   }

//   isEmpty () {
//     if (!this.front) {
//       return true;
//     }
//     return false;
//   }
// }
// class AnimalShelter{
//   constructor(){
//     this.dogs = new Queue();
//     this.cats = new Queue();
//   }
//   enqueue(animal){
//     if(animal.type === 'dog'){
//       this.dogs.enqueue(animal);
//     }
//     if(animal.type === 'cat'){
//       this.cats.enqueue(animal);
//     }
//   }
//   dequeue(pref){
//     if(pref === 'dog'){
//       return this.dogs.dequeue();
//     }
//     if(pref === 'cat'){
//       return this.cats.dequeue();
//     }
//   }



// }


// module.exports = AnimalShelter;


// let shelter = new AnimalShelter();
// shelter.enqueue({type:'dog', name:'fido'});
// shelter.enqueue({type:'cat', name:'fluffy'});
// shelter.enqueue({type:'dog', name:'spot'});
// shelter.enqueue({type:'cat', name:'mittens'});
// shelter.enqueue({type:'unicorn', name:'rex'});

// console.log(shelter);
