'use strict';
const LinkedList = require ('../index');

describe ('Linked List', () => {
  it ('should instantiate an empty linked list', () => {
    const linked = new LinkedList ();
    expect (linked.head).toBeNull ();
  });
});

it ('should insert a node into the beginning of empty linked list', () => {

  const linked = new LinkedList ();
  linked.insert ('apple');
  expect (linked.head.val).toEqual ('apple');
  expect (linked.head.next).toBeNull ();

});

it('should insert multiple nodes into the linked list', () => {
  const linked = new LinkedList();
  linked.insert('apple');
  linked.insert('banana');


  console.log(linked.tail.val);
  expect(linked.head.val).toEqual('apple');
  expect(linked.head.next.val).toEqual('banana');
  expect(linked.head.next.next).toBeNull();

  expect(linked.length).toEqual(2);
});


it('should return true if value is found in linked list', () => {
  const linked = new LinkedList();
  linked.insert('apple');
  linked.insert('banana');
  // linked.insert('carrot');
  expect(linked.includes('apple')).toEqual(true);
  expect(linked.includes('banana')).toEqual(true);
  //expect(linked.includes('carrot')).toEqual(true);
  expect(linked.includes('chicken')).toEqual(false);
});

it('should return string of all values in linked list', () => {
  const linked = new LinkedList();
  linked.insert('apple');
  linked.insert('banana');
  expect(linked.toString()).toEqual('{apple} -> {banana} -> NULL');
});











