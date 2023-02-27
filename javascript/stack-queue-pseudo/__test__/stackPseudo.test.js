'use strict';

const PseudoQueue = require ('../index');

describe ('PseudoQueue', () => {
  it ('should enqueue a node onto the PseudoQueue', () => {
    const pseudoQueue = new PseudoQueue ();
    pseudoQueue.enqueue ('10');
    expect (pseudoQueue.front.val).toEqual ('10');
    expect (pseudoQueue.front.next).toBeNull ();
  }
  );

  it ('should enqueue multiple nodes onto the PseudoQueue', () => {
    const pseudoQueue = new PseudoQueue ();
    pseudoQueue.enqueue ('10');
    pseudoQueue.enqueue ('15');
    pseudoQueue.enqueue ('20');
    expect (pseudoQueue.front.val).toEqual ('10');
    expect (pseudoQueue.front.next.val).toEqual ('15');
    expect (pseudoQueue.front.next.next.val).toEqual ('20');
    expect (pseudoQueue.front.next.next.next).toBeNull ();
  }
  );

  it ('should dequeue a node off the PseudoQueue', () => {
    const pseudoQueue = new PseudoQueue ();
    pseudoQueue.enqueue ('5');
    pseudoQueue.enqueue ('10');
    pseudoQueue.enqueue ('15');
    pseudoQueue.enqueue ('20');
    expect (pseudoQueue.dequeue ()).toEqual ('5');
    expect (pseudoQueue.dequeue ()).toEqual ('10');
    expect (pseudoQueue.dequeue ()).toEqual ('15');
    expect (pseudoQueue.dequeue ()).toEqual ('20');
  }
  );
});
