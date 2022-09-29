'use strict';

const { LinkedList } = require('../LinkedList');
const { Node } = require('../Node');
const { Queue } = require('../Queue');

describe('testing Stack Class', () => {
  it('Creating instance testing', () => {
    const testQueue = new Queue();
    expect(testQueue).toBeInstanceOf(Queue);
    expect(testQueue.top).toBeNull();
  });
  it('Testing isEmpty function', () => {
    const testQueue = new Queue();
    let x = testQueue.isEmpty();
    expect(x).toEqual(1);
  });
  it('Testing enqueue function', () => {
    const testQueue = new Queue();
    testQueue.enqueue('meow');
    testQueue.enqueue('meow1');
    testQueue.enqueue('meow2');
    expect(testQueue.top.value).toEqual('meow');
  });
  it('Testing dequeue function', () => {
    const testQueue = new Queue();
    testQueue.enqueue('meow');
    testQueue.enqueue('meow1');
    testQueue.enqueue('meow2');
    testQueue.dequeue();
    expect(testQueue.top.value).toEqual('meow1');
  });
  it('Testing peek function', () => {
    const testQueue = new Queue();
    testQueue.enqueue('meow');
    testQueue.enqueue('meow1');
    testQueue.enqueue('meow2');
    testQueue.dequeue();
    let x = testQueue.peek();
    expect(x).toEqual('meow1');
  });
  
});