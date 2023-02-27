'use strict';

const Stack = require ('../index');

describe ('Stack', () => {
  it ('should instantiate an empty stack', () => {
    const stack = new Stack ();
    expect (stack.top).toBeNull ();
  });
});

it ('should push a node onto the stack', () => {
  const stack = new Stack ();
  stack.push ('1');
  expect (stack.top.val).toEqual ('1');
  expect (stack.top.next).toBeNull ();
}
);

it ('should push multiple nodes onto the stack', () => {
  const stack = new Stack ();
  stack.push ('1');
  stack.push ('2');
  stack.push ('3');
  expect (stack.top.val).toEqual ('1');
  expect (stack.top.next.val).toEqual ('2');
  expect (stack.top.next.next.val).toEqual ('3');
  expect (stack.top.next.next.next).toBeNull ();
}
);

it ('should pop a node off the stack', () => {
  const stack = new Stack ();
  stack.push ('1');
  stack.push ('2');
  stack.push ('3');
  expect (stack.pop ()).toEqual ('1');
  expect (stack.pop ()).toEqual ('2');
  expect (stack.pop ()).toEqual ('3');
}
);

it ('should empty a stack after multiple pops', () => {
  const stack = new Stack ();
  stack.push ('1');
  stack.push ('2');
  stack.push ('3');
  stack.pop ();
  stack.pop ();
  stack.pop ();
  expect (stack.top).toBeNull ();
}
);

it ('should peek the next item on the stack', () => {
  const stack = new Stack ();
  stack.push ('1');
  stack.push ('2');
  stack.push ('3');
  expect (stack.peek ()).toEqual ('1');
}
);

it ('should return true if the stack is empty', () => {
  const stack = new Stack ();
  expect (stack.isEmpty ()).toBeTruthy ();
}
);

it ('should return false if the stack is not empty', () => {
  const stack = new Stack ();
  stack.push ('1');
  expect (stack.isEmpty ()).toBeFalsy ();
}
);

it ('should throw an error when popping an empty stack', () => {
  const stack = new Stack ();
  expect (() => stack.pop ()).toThrow ();
}
);

it ('should throw an error when peeking an empty stack', () => {
  const stack = new Stack ();
  expect (() => stack.peek ()).toThrow ();
}
);

it ('should instantiate a stack with a single value', () => {
  const stack = new Stack ('1');
  expect (stack.top.val).toEqual ('1');
  expect (stack.top.next).toBeNull ();
}
);
