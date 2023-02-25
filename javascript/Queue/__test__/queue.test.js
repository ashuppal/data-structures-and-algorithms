'use strict';

const Queue = require ('../index');

describe ('Queue', () => {
  it ('should instantiate an empty queue', () => {
    const queue = new Queue ();
    expect (queue.front).toBeNull ();
  }
  );
});

it ('should enqueue a node onto the queue', () => {
  const queue = new Queue ();
  queue.enqueue ('1');
  expect (queue.front.val).toEqual ('1');
  expect (queue.front.next).toBeNull ();
});

it ('should enqueue multiple nodes onto the queue', () => {
  const queue = new Queue ();
  queue.enqueue ('1');
  queue.enqueue ('2');
  queue.enqueue ('3');
  expect (queue.front.val).toEqual ('1');
  expect (queue.front.next.val).toEqual ('2');
  expect (queue.front.next.next.val).toEqual ('3');
  expect (queue.front.next.next.next).toBeNull ();
});

it ('should dequeue a node off the queue', () => {
  const queue = new Queue ();
  queue.enqueue ('1');
  queue.enqueue ('2');
  queue.enqueue ('3');
  expect (queue.dequeue ()).toEqual ('1');
  expect (queue.dequeue ()).toEqual ('2');
  expect (queue.dequeue ()).toEqual ('3');
});

it ('should empty a queue after multiple dequeues', () => {
  const queue = new Queue ();
  queue.enqueue ('1');
  queue.enqueue ('2');
  queue.enqueue ('3');
  queue.dequeue ();
  queue.dequeue ();
  queue.dequeue ();
  expect (queue.front).toBeNull ();
});

it ('should peek the next item on the queue', () => {
  const queue = new Queue ();
  queue.enqueue ('1');
  queue.enqueue ('2');
  queue.enqueue ('3');
  expect (queue.peek ()).toEqual ('1');
});

it ('should return true if the queue is empty', () => {
  const queue = new Queue ();
  expect (queue.isEmpty ()).toBeTruthy ();
});

it ('should return false if the queue is not empty', () => {
  const queue = new Queue ();
  queue.enqueue ('1');
  expect (queue.isEmpty ()).toBeFalsy ();
});

it ('should throw an error when dequeue is called on an empty queue', () => {
  const queue = new Queue ();
  expect (() => queue.dequeue ()).toThrow ();
});

it ('should throw an error when peek is called on an empty queue', () => {
  const queue = new Queue ();
  expect (() => queue.peek ()).toThrow ();
});

it ('should throw an error when dequeue is called with a value', () => {
  const queue = new Queue ();
  expect (() => queue.dequeue ('1')).toThrow ();
});



